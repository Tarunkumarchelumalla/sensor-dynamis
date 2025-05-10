import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import MainHeader from "@/components/common/Typography/main-header";
import SubText from "@/components/common/Typography/sub-text";
import Chip from "@/components/common/custom-chip";


function Testimonials() {
  const ImageData = [
    {
      src: "/landing-page/testimonials/ikaria_island.svg",
      title: "Island of Ikaria",
      subText:
        `Real-time insights from Dynamis enabled swift, targeted responses on Ikaria Island. Precise flood and tsunami warnings facilitated timely evacuations, significantly reducing risk and protecting both residents and infrastructure.`,
    },
    {
      src: "/landing-page/testimonials/forti.svg",
      title: "Port Fund of Porto Rafti ",
      subText:
        `Dynamis’ Aqua Wave Insights revolutionized operations at Porto Rafti, delivering accurate, real-time wave data. Enhanced safety, optimized efficiency, and regulatory compliance boosted confidence across port operations.`,
    },
    {
      src: "/landing-page/testimonials/chip.svg",
      title: "The Power of Now",
      subText:
        `Real-time environmental intelligence empowers rapid, informed decision-making. Dynamis leverages advanced AI analytics to proactively manage climate risks, promoting resilience and sustainable resource management.`,
    },
  ];

  const TestimonialsCard = (itemData: (typeof ImageData)[0]) => {
    return (
      <Box
        sx={{
          borderRadius: "8px",
          border: "none",
          background: "var(--secondary-color)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Image
          src={itemData.src}
          alt={""}
          width={100}
          height={100}
          style={{
            objectFit: "cover",
            height: "280px",
            width: "100%",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
          }}
        ></Image>
        <Box
          sx={{
            border: "1px solid #FFFFFF1A",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderBottomLeftRadius: "8px",
            borderBottomRightRadius: "8px",
          }}
        >
          <Box padding={"12px"}>
            <Typography fontWeight={600} fontSize={{ xs: "16px", md: "24px" }}>
              {itemData.title}
            </Typography>
            <SubText fontSize={{ xs: "14px", md: "16px" }} marginTop={"16px"}>
              {itemData.subText}
            </SubText>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"row"}
            padding={"12px"}
            gap={"8px"}
            sx={{
              cursor: "pointer",
            }}
          >
            <SubText>View More</SubText>
            <Image
              src={"/landing-page/testimonials/right-arrow-selected.svg"}
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
        <Chip title="Testimonials" color={"var(--white-color)"}></Chip>

        <MainHeader>
          {`Trusted by Global Organisation's & Local Authorities`}
        </MainHeader>
        <SubText>
          {`Leading organizations, governments and local authorities use the
          Dynamis platform to support daily operations, develop preventive
          maintenance programs, guide long-term strategies.`}
        </SubText>
      </Box>

      <Grid2 container marginTop={"40px"} spacing={4}>
        {ImageData.map((el, index) => (
          <Grid2 size={{ xs: 12, md: 4 }} key={index} sx={{ display: "flex" }}>
            <TestimonialsCard {...el} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}

export default Testimonials;
