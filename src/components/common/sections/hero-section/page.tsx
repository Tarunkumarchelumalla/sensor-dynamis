"use client";

import { Box } from "@mui/material";
import Image from "next/image";
import MainHeader from "@/components/common/Typography/main-header";
import SubText from "@/components/common/Typography/sub-text";
import AnimatedContent from "@/components/common/animations/animated-content/page";

interface HeroSectionProps {
  title: string;
  description: string;
  imageSrc: string;
}

const HeroSection = ({ title, description, imageSrc }: HeroSectionProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Image
        src={imageSrc}
        width={100}
        height={100}
        alt=""
        style={{
          width: "100%",
          height: "480px",
          objectFit: "cover",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "var(--white-color)",
          maxWidth: "1280px",
          gap: "12px",
          padding: {
            xs: "10px",
            md: "40px",
          },
        }}
      >
        <AnimatedContent delay={0}>
          <MainHeader sx={{ textAlign: "center" }}>{title}</MainHeader>
        </AnimatedContent>
        <AnimatedContent delay={0.2}>
          <SubText sx={{ textAlign: "center" }}>{description}</SubText>
        </AnimatedContent>
      </Box>
    </Box>
  );
};

export default HeroSection;
