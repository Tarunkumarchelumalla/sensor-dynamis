"use client";

import { Box, Grid2, IconButton, Typography, useMediaQuery } from "@mui/material";
import React, { useRef, useState } from "react";
import SlideCarousel, {
  Int_Slide,
  SlideCarouselRef,
} from "../common/slider-carousel";
import SubText from "../Typography/sub-text";
import Image from "next/image";

function Testimonials() {

  const isXs = useMediaQuery('(max-width:799px)');


  const DesktopCard=(slide:Int_Slide)=>{
  return( <> <Image
    width={1600}
    height={900}
    src={slide.src}
    alt={slide.caption || ""}
    className="w-full min-h-[358px] object-cover rounded-lg"
  />

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
    </>
  )}

  const MobileCard =(slide:Int_Slide)=>{ 

    return(
      <Box sx={{
        display:"flex",
        flexDirection:"column",
        gap:"12px"
      }}>
        <Image src={slide.src} alt={""} height={240} width={343} style={{
          width:"100%",
          height:"240px",
          objectFit:"cover",
          borderRadius:"8px"
        }}></Image>

        <SubText sx={{
          fontWeight:600,
          fontSize:"24px",
        }}>{slide.title}</SubText>

        <SubText>{slide.caption}</SubText>
        <SubText>{slide.author}</SubText>

      </Box>
    )

  }

  const carouselRef = useRef<SlideCarouselRef>(null);
  const [selected, setSelected] = useState<"left" | "right">("left");
  const slides: Int_Slide[] = [
    {
      src: "/testimonials/islandikaria.svg",
      caption:
        "Real-time insights from Dynamis enabled swift, targeted responses on Ikaria Island. Precise flood and tsunami warnings facilitated timely evacuations, significantly reducing risk and protecting both residents and infrastructure.",
      title: "Island of Ikaria",
      author: "— Municipal Water Authority, Ikaria",
    },
    {
      src: "/testimonials/islandikaria.svg",
      caption:
        "AWI has revolutionized our harbour operations with real-time insights on wave height, direction, and sea conditions. We've seen fewer delays, improved safety, and greater efficiency. It’s a game-changer for informed, timely decisions and optimized port activity.",
      title: "Port Fund of Porto Rafti",
      author: "— Operations Manager, Port Fund of Porto Rafti",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        background: "var(--primary-light-color)",
      }}
      padding={{ xs: "64px 10px", md: "80px" }}
    >

      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, md: 8 }} sx={{}}>
          <Typography
            fontSize={{ xs: "24px", md: "36px" }}
            fontWeight={600}
          >{`Trusted by Global Organisation's & Local Authorities`}</Typography>

          <SubText
            fontSize={{ xs: "16px", md: "20px" }}
            fontWeight={400}
            marginTop={"12px"}
          >{`Leading organizations, governments and local authorities use the Dynamis platform to support daily operations, develop preventive maintenance programs, guide long-term strategies.`}</SubText>
        </Grid2>
        <Grid2
          size={{ xs: 12, md: 4 }}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"end"}
        >
          <Box
            sx={{
              width: "128px",
              height: "64px",
              border: "1px solid var(--primary-color)",
              borderRadius: "4px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            {/* Left Arrow */}
            <Box
              onClick={() => {
                setSelected("left");
                carouselRef.current?.prevSlide();
              }}
              sx={{
                width: "50%",
                height: "100%",
                background:
                  selected === "left"
                    ? "var(--bg-primary-linear)"
                    : "transparent",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Image
                src={
                  selected === "left"
                    ? "/testimonials/left-arrow-selected.svg"
                    : "/testimonials/left-arrow.svg"
                }
                alt="Left Arrow"
                width={16}
                height={16}
              />
            </Box>

            {/* Right Arrow */}
            <Box
              onClick={() => {
                setSelected("right");
                carouselRef.current?.nextSlide();
              }}
              sx={{
                width: "50%",
                height: "100%",
                background:
                  selected === "right"
                    ? "var(--bg-primary-linear)"
                    : "transparent",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Image
                src={
                  selected === "right"
                    ? "/testimonials/right-arrow-selected.svg"
                    : "/testimonials/right-arrow.svg"
                }
                alt="Right Arrow"
                width={16}
                height={16}
              />
            </Box>
          </Box>
        </Grid2>
      </Grid2>


        <SlideCarousel ref={carouselRef} slides={slides}  scrollType="manual"  renderSlide={(slide)=>isXs ?MobileCard(slide):DesktopCard(slide)} />

    </Box>
  );
}

export default Testimonials;
