"use client";

import { Box, Grid2, IconButton, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import SlideCarousel, {
  Int_Slide,
  SlideCarouselRef,
} from "../common/slider-carousel";
import SubText from "../Typography/sub-text";
import Image from "next/image";

function Testimonials() {
  const carouselRef = useRef<SlideCarouselRef>(null);
  const [selected, setSelected] = useState<"left" | "right">("left");
  const slides: Int_Slide[] = [
    {
      src: "/testimonials/islandikaria.svg",
      caption:
        "Real-time insights from Dynamis enabled swift, targeted responses on Ikaria Island. Precise flood and tsunami warnings facilitated timely evacuations, significantly reducing risk and protecting both residents and infrastructure.",
      title: "Island of Ikaria",
      author:'— Municipal Water Authority, Ikaria'
    },
    {
      src: "/testimonials/islandikaria.svg",
      caption:
        "AWI has revolutionized our harbour operations with real-time insights on wave height, direction, and sea conditions. We've seen fewer delays, improved safety, and greater efficiency. It’s a game-changer for informed, timely decisions and optimized port activity.",
      title: "",
        author:'— Operations Manager, Port Fund of Porto Rafti'
    },
    {
      src: "/testimonials/islandikaria.svg",
      caption:
        "Real-time insights from Dynamis enabled swift, targeted responses on Ikaria Island. Precise flood and tsunami warnings facilitated timely evacuations, significantly reducing risk and protecting both residents and infrastructure.",
      title: "",
        author:'— Municipal Water Authority, Ikaria'
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection:'column',
        gap:'40px',
        background:'var(--primary-light-color)'
      }}
      padding={{ xs: "64px 10px",md:'80px' }}
    >
      {/* <button onClick={() => carouselRef.current?.prevSlide()}>Prev</button>
         <button onClick={() => carouselRef.current?.nextSlide()}>Next</button> */}

        <Grid2 container spacing={2}>

          <Grid2 size={{xs:12,md:8}} sx={{
           
          }}>
            <Typography fontSize={{xs:'24px',md:'36px'}} fontWeight={600} >{`Trusted by Global Organisation's & Local Authorities`}</Typography>

            <SubText fontSize={{xs:'16px',md:'20px'}} fontWeight={400} marginTop={'12px'}>{`Leading organizations, governments and local authorities use the Dynamis platform to support daily operations, develop preventive maintenance programs, guide long-term strategies.`}</SubText>

          </Grid2>
          <Grid2 size={{xs:12,md:4}} display={'flex'} flexDirection={'row'} justifyContent={'end'}>

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
        onClick={() => {setSelected("left"); carouselRef.current?.prevSlide()} }
        sx={{
          width: "50%",
          height: "100%",
          background:
            selected === "left" ? "var(--bg-primary-linear)" : "transparent",
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
        onClick={() => {setSelected("right");carouselRef.current?.nextSlide()}}
        sx={{
          width: "50%",
          height: "100%",
          background:
            selected === "right" ? "var(--bg-primary-linear)" : "transparent",
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

      <Box>
        <SlideCarousel ref={carouselRef} slides={slides} scrollType="manual" />
      </Box>
    </Box>
  );
}

export default Testimonials;
