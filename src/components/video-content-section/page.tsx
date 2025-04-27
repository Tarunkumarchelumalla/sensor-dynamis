import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import SubText from "../Typography/sub-text";
import Image from "next/image";
import MainHeader from "../Typography/main-header";

function VideoSection() {
  const videoData = [
    {
      src: "https://www.youtube.com/embed/ES7eKWRRJ0o?si=yG5jHUCdz2qgt2fF",
      title: "Island of Ikaria",
      subText:
        "Real-time insights from Dynamis enabled swift, targeted responses on Ikaria Island. Precise flood and tsunami warnings facilitated timely evacuations, significantly reducing risk and protecting both residents and infrastructure.",
    },
    {
      src: "https://www.youtube.com/embed/JtKbKALrejE?si=9oOh4Vzww3ULKudu",
      title: "Port Fund of Porto Rafti ",
      subText:
        "Dynamis’ Aqua Wave Insights revolutionized operations at Porto Rafti, delivering accurate, real-time wave data. Enhanced safety, optimized efficiency, and regulatory compliance boosted confidence across port operations.",
    },
    {
      src: "https://www.youtube.com/embed/JtKbKALrejE?si=9oOh4Vzww3ULKudu",
      title: "The Power of Now",
      subText:
        "Real-time environmental intelligence empowers rapid, informed decision-making. Dynamis leverages advanced AI analytics to proactively manage climate risks, promoting resilience and sustainable resource management.",
    },
  ];

  const VideoCard = (itemData: (typeof videoData)[0]) => {
    return (
      <Box
        sx={{
          borderRadius: "8px",
          background: "var(--secondary-color)",
          border: "none",
        }}
      >
        <iframe
          width="100%"
          height="280px"
          src={itemData.src}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{ borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}
        ></iframe>
        <Box
          padding={"12px"}
          border={"1px solid #FFFFFF1A"}
          sx={{
            borderBottomLeftRadius: "8px",
            borderBottomRightRadius: "8px",
          }}
        >
          <Typography fontWeight={600} fontSize={{ xs: "16px", md: "24px" }}>
            {itemData.title}
          </Typography>
          <SubText fontSize={{ xs: "14px", md: "16px" }} marginTop={"16px"}>
            {itemData.subText}
          </SubText>

          <Box
            display={"flex"}
            flexDirection={"row"}
            marginTop={"16px"}
            gap={"8px"}
            sx={{
              cursor: "pointer",
            }}
          >
            <SubText >
              View More
            </SubText>
            <Image
              src={"/testimonials/right-arrow-selected.svg"}
              alt={""}
              height={14}
              width={14}
            ></Image>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        padding: {
          xs: "64px 10px ",
          md: "80px",
        },
        background: "var(--bg-primary-linear)",
        color: "var(--white-color)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          alignItems: {
            xs: "flex-start",
            md: "center",
          },
        }}
      >
        <MainHeader >
          Real-World Climate Change Impact Stories
        </MainHeader>
        <SubText>
          See how real-time data helps communities tackle floods, tsunamis, and
          climate risks for a safer future.
        </SubText>
      </Box>

      <Grid2 container marginTop={"40px"} spacing={4}>
        {videoData.map((el, index) => (
          <Grid2 size={{ xs: 12, md: 4 }} key={index}>
            <VideoCard {...el} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}

export default VideoSection;
