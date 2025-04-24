"use client";
import {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SubText from "../Typography/sub-text";
import { Box, Typography } from "@mui/material";

export interface Int_Slide {
  src: string;
  caption?: string;
  title: string;
  author:string
}

export interface SlideCarouselProps {
  scrollType?: "auto" | "manual";
  slides: Int_Slide[];
}

export interface SlideCarouselRef {
  nextSlide: () => void;
  prevSlide: () => void;
}

const SlideCarousel = forwardRef<SlideCarouselRef, SlideCarouselProps>(
  ({ scrollType = "auto", slides = [] }, ref) => {
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
      <div className="main-container w-full flex flex-col justify-center items-center">
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
                <Image
                  width={1600}
                  height={900}
                  src={slide.src}
                  alt={slide.caption || ""}
                  className="w-full min-h-[358px] object-cover rounded-lg"
                />
                {slide.caption && (
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 16, // equivalent to bottom-4
                      left: 12, // equivalent to left-3
                      width: "calc(100% - 30px)",
                      border: "1px solid white",
                      borderRadius: "8px",
                      color: "var(--white-color)",
                      padding:'20px',
                      backdropFilter: 'blur(20px)'

                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <Typography
                        color="var(--highlight-color)"
                        fontSize={{ xs: "16px", md: "24px" }}
                        fontWeight={700}
                      >
                        {slide.title}
                      </Typography>
                      <SubText
                        fontSize={{ xs: "16px", md: "20px" }}
                        fontWeight={400}
                      >
                        Read full story
                      </SubText>
                    </Box>

                    <SubText
                      sx={{
                        color: "var(--white-color)",
                        textAlign: "left",
                        width: "100%",
                        borderRadius: "8px",
                        fontSize: {
                         xs:"16px",
                         md:"20px"
                        },
                        p: 1,
                      }}
                    >
                      {slide.caption}
                    </SubText>
                    <SubText  sx={{
                        color: "var(--white-color)",
                        width: "100%",
                        borderRadius: "8px",
                        fontSize: {
                         xs:"16px",
                         md:"16px"
                        },
                        p: 1,
                      }} textAlign={'end'}>{slide.author}</SubText>
                  </Box>
                )}
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
