"use client";

import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import SplitType from "split-type";
import SubText from "@/components/common/Typography/sub-text";

gsap.registerPlugin(TextPlugin);
const texts = ["Flood Preparedness", "Tsunami Awareness", "Operational Optimization", "Infrastructure Integrity"];

function HeroSection() {
  const textRef = useRef<any>(null);
  const [index, setIndex] = useState(0);

  

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    element.textContent = texts[index];

    const split = new SplitType(element, {
      types: "chars",
    });


    gsap.from(split.chars, {
      duration: 1,
      x:100,
      autoAlpha: 0,
      ease: "power2.out",
      fontSize:'24px'
    });

    return () => {
      split.revert(); // Clean up spans
    };
  }, [index]);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          zIndex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "var(--white-color)",
        }}
      >
        <Box
          id="hero-section"
          sx={{
            background: "var(--bg-primary-linear)",
            width: "100%",
            display: "flex",

            zIndex: 1,
            flexDirection: "column",
            gap: "20px",
            color: "var(--white-color)",
          }}
          height={{ xs: "", md: "928px" }}
          padding={{ xs: "40px 10px", md: "80px" }}
          alignItems={{ xs: "start", md: "center" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "32px",
              background: "var(--secondary-color)",
              borderRadius: "16px",
              border: "1px solid #0000001A",
              padding: "4px 10px 4px 4px",
              whiteSpace: "nowrap",
              fontSize: "14px",
              textOverflow: "ellipsis",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                width: "100%",
                cursor: "pointer",
                height: "32px !important",
              }}
            >
              <Box
                sx={{
                  borderRadius: "16px",
                  backgroundColor: "var(--white-color)",
                  border: "1px solid var(--light-pink)",
                  padding: "2px 8px",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  color: "var(--black-color)",
                }}
              >
                New feature
              </Box>
              <Box
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                Check out the team dashboard
              </Box>
              <Image
                src={"/right-arrow-white.svg"}
                width={16}
                height={16}
                alt={""}
                loading="eager"
              ></Image>
            </Box>
          </Box>

          <Box
            fontSize={{ xs: "32px", md: "42px" }}
            fontWeight={{ xs: 500, md: 600 }}
            textAlign={{ xs: "left", md: "center" }}
          >
            <span className="text-[var(--highlight-color)]">
              Real-time Aqua Intelligence platform
            </span>
            <br></br>
            for optimal, data-driven decision-making leading to smarter, more
            sustainable strategies for
          </Box>
          <SubText
          sx={{
            fontSize:{ xs: "18px", md: "24px" }
          }}
            fontWeight={400}
            ref={textRef}
          >
            {texts[index]}
          </SubText>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "8px",
            }}
          >
            <Button
              startIcon={
                <Image
                  src={"/landing-page/hero-section/play.svg"}
                  alt={""}
                  width={18}
                  height={18}
                ></Image>
              }
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                background: "var(--white-color)",
                borderRadius: "8px",
                padding: "8px 16px",
              }}
            >
              <span className="text-[var(--gray-color)]">Demo</span>
            </Button>
            <Button
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                background: "var(--secondary-color)",
                borderRadius: "8px",
                padding: "8px 16px",
                textTransform: "none",
                border: "1px solid #FFFFFF33",
              }}
            >
              <span className="text-[var(--white-color)] ">Contact Us</span>
            </Button>
          </Box>

          <Box display={{ xs: "flex", md: "none" }}>
            <Image
              src={"/landing-page/hero-section/hero-content.svg"}
              width={1102}
              height={13}
              alt={""}
              style={{ zIndex: 100 }}
            ></Image>
          </Box>
          <Box
            display={{ xs: "none", md: "flex" }}
            sx={{
              zIndex: 100,
            }}
          >
            <Image
              src={"/landing-page/hero-section/hero-content.svg"}
              width={1102}
              height={13}
              alt={""}
              style={{ zIndex: 100 }}
            ></Image>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: 830,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src="/landing-page/hero-section/map.svg"
          alt=""
          fill
          style={{ objectFit: "cover" }}
          priority // optional
        />

        <Box
          sx={{
            position: "relative",
            backdropFilter: "blur(20px)",
            border: "1px solid #FFFFFF",
            justifyContent: "center",
            display: "flex",
            borderRadius: "12px",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            maxWidth: "454px",
            background: "#F6F9FF80",
            padding: "20px",
          }}
        >
          <Box>
            <Image
              src={"/landing-page/hero-section/lock.svg"}
              alt={""}
              width={100}
              height={100}
            ></Image>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "8px",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
            width={{ xs: "284px", md: "100%" }}
          >
            <Box sx={{ fontSize: "24px", fontWeight: 700 }}>Lock Content</Box>
            <SubText fontSize={"16px"} fontWeight={400} textAlign={"center"}>
              Access real-time data. Request permission to explore.
            </SubText>

            <Box>
              <Button
                startIcon={
                  <Image
                    src={"/landing-page/hero-section/stars.svg"}
                    alt={""}
                    width={18}
                    height={17}
                  ></Image>
                }
                sx={{
                  color: "var(--white-color)",
                  background: "var(--primary-color)",
                  borderRadius: "8px",
                  textTransform: "none",
                  padding: "12px 16px",
                }}
              >
                Upgrade to Unlock
              </Button>
            </Box>
            <Box display={"flex"} flexDirection={"row"} gap={"4px"}>
              <SubText fontSize={"16px"} textAlign={"center"}>
                Learn more about premium feature
              </SubText>
              <Image
                src={"/landing-page/hero-section/arrow-black-45.svg"}
                width={24}
                height={24}
                alt=""
              ></Image>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default HeroSection;
