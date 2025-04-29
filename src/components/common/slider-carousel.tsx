"use client";
import {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  ReactNode,
} from "react";
import { motion } from "framer-motion";
import { BoxProps } from "@mui/material";

export interface Int_Slide {
  src: string;
  caption?: string;
  title: string;
  author: string;
}

export interface SlideCarouselRef {
  nextSlide: () => void;
  prevSlide: () => void;
}

export interface SlideCarouselProps extends BoxProps {
  scrollType?: "auto" | "manual";
  slides: Int_Slide[];
  renderSlide: (slide: Int_Slide, index: number) => ReactNode;
}

const SlideCarousel = forwardRef<SlideCarouselRef, SlideCarouselProps>(
  ({ scrollType = "auto", slides = [], renderSlide, ...rest }, ref) => {
    const [current, setCurrent] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

    const updateScrollPosition = (index: number) => {
      if (carouselRef.current) {
        const container = carouselRef.current;
        const itemWidth = container.clientWidth;
        const scrollLeft = index * itemWidth;

        container.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        });
      }
    };

    const nextSlide = () => {
      setCurrent((prev) => {
        const newIndex = (prev + 1) % slides.length;
        updateScrollPosition(newIndex);
        return newIndex;
      });
      resetAutoScroll();
    };

    const prevSlide = () => {
      setCurrent((prev) => {
        const newIndex = (prev - 1 + slides.length) % slides.length;
        updateScrollPosition(newIndex);
        return newIndex;
      });
      resetAutoScroll();
    };

    const resetAutoScroll = () => {
      if (scrollType === "auto") {
        if (autoScrollRef.current) clearInterval(autoScrollRef.current);
        autoScrollRef.current = setInterval(() => {
          setCurrent((prev) => {
            const newIndex = (prev + 1) % slides.length;
            updateScrollPosition(newIndex);
            return newIndex;
          });
        }, 2000);
      }
    };

    useEffect(() => {
      if (scrollType === "auto") {
        autoScrollRef.current = setInterval(() => {
          setCurrent((prev) => {
            const newIndex = (prev + 1) % slides.length;
            updateScrollPosition(newIndex);
            return newIndex;
          });
        }, 2000);
      }

      return () => {
        if (autoScrollRef.current) clearInterval(autoScrollRef.current);
      };
    }, [scrollType, slides.length]);

    useImperativeHandle(ref, () => ({
      nextSlide,
      prevSlide,
    }));

    return (
      <div
        className="main-container w-full flex flex-col justify-center items-center"
      >
        <div className="relative w-full min-h-[358px] flex justify-center items-center">
          <div ref={carouselRef} className="flex overflow-hidden w-full h-full">
            {slides.map((slide, index) => (
              <motion.div
                key={index}
                className="relative w-full h-full flex-shrink-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {renderSlide(slide, index)}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

SlideCarousel.displayName = "SlideCarousel";
export default SlideCarousel;
