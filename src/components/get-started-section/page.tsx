"use client";

import { Box, Button, Grid2, Typography } from "@mui/material";
import React from "react";
import SubText from "../Typography/sub-text";
import Image from "next/image";

interface Int_solution_card {
  imageUrl: string;
  isButton: boolean;
  title: string;
  subText: string;
}

function GetStartedSection() {
  const solution1: Int_solution_card = {
    imageUrl: "/get-started-section/number1.svg",
    isButton: true,
    title: "Choose your Solution",
    subText:
      "Explore our systems and select the one best suited for your local environment challenges from the list below. ",
  };

  const solution2: Int_solution_card = {
    imageUrl: "/get-started-section/number2.svg",
    isButton: false,
    title: "Sensor & Analytics",
    subText:
      "Deployed sensors, connected to Dynamics, and enabled real-time localized insights.",
  };

  const solution3: Int_solution_card = {
    imageUrl: "/get-started-section/number3.svg",
    isButton: false,
    title: "Stay Protected",
    subText:
      "Receive continuous data updates and real-time anomaly alerts to proactively manage water supplies and quality, infrastructure as well as environmental risk thereby optimizing operations and warning systems(level of cover depends on selected solutions) ",
  };

  const SolutionCard = (data: Int_solution_card) => {
    return (
      <Box
        sx={{
          padding: "16px",
          border: "1px solid #FFFFFF1A",
          color: "var(--white-color)",
          display: "flex",
          flexDirection: "column",
          background: "var(--secondary-color)",
          gap: "12px",
          flex: 1,
          minHeight:'229px',
          borderRadius: "12px",
          justifyContent: "start",
        }}
      >
        <Image src={data.imageUrl} width={58} height={58} alt={""}></Image>

        <Typography fontSize={{ xs: "16px", md: "24px" }} fontWeight={600}>
          {data.title}
        </Typography>
        <SubText fontSize={{ xs: "12px", md: "16px" }} fontWeight={400}>
          {data.subText}
        </SubText>
        {data.isButton && (
          <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            gap={"8px"}
            sx={{
              cursor: "pointer",
            }}
          >
            <SubText fontWeight={400} fontSize={{ xs: "14px", md: "20px" }}>
              Our Solutions
            </SubText>
            <Box sx={{
                        width: { xs: 24, md: 32 },
                        height: { xs: 24, md: 32 },
                        borderRadius: "8px",
                        overflow: "hidden",
                        flexShrink: 0,
                        position: "relative", 
                      }}>

            <Image
              src={"/product-section/right-yellow-arrow.svg"}
              alt={""}
              fill
               sizes="(max-width: 600px) 28px, 32px"
            ></Image>
            </Box>
          </Box>
        )}
      </Box>
    );
  };

  return (
    <Box
      sx={{
        background: "var(--bg-primary-linear)",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "36px",
        color: "var(--white-color)",
      }}
      padding={{
        xs: "24px 10px",
        md: "80px",
      }}
    >
      <Grid2
        container
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid2 size={{ xs: 12, md: 8 }}>
          <Typography fontSize={{xs:'24px',md:"36px"}}>Proactive Forecasting</Typography>
          <SubText
            marginTop={"12px"}
            fontSize={{ xs: "16px", md: "20px" }}
            fontWeight={400}
            maxWidth={"746px"}
          >
            {`Getting started is simple, Whatever your organisation's size, let
      our real-time aqua intelligence platform power your decision.`}
          </SubText>
        </Grid2>

        <Grid2
          size={{ xs: 12, md: 4 }}
          display="flex"
          justifyContent={{ xs: "flex-start", md: "flex-end" }}
          
        >
          <Button
          
            sx={{
              background: "var(--white-color)",
              borderRadius: "8px",
              border: "1px solid #D5D7DA",
              color: "var(--gray-color)",
              fontWeight: 700,
              fontSize: "16px",
              textTransform: "none",
              width:{ xs: '100%', md: 'fit-content' }
            }}
            endIcon={
              <Image
                src={"/get-started-section/right-black-arrow.svg"}
                alt=""
                width={24}
                height={24}
              />
            }
          

          >
            Get Started
          </Button>
        </Grid2>
      </Grid2>

      <Grid2 container spacing={2}>
        <Grid2
          size={{ xs: 12, md: 5 }}
          display={{xs:'none',md:'flex'}}
          sx={{
            backgroundImage: "url(/get-started-section/flood-image.svg)",
            position: "relative",
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            padding: "40px",
            borderRadius: "16px",
          }}
        ></Grid2>
        <Grid2 size={{ xs: 12, md: 7 }}>
          <Grid2 container spacing={2}>
            <Grid2
              size={{ xs: 12, md: 6 }}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <SolutionCard {...solution1} />
            </Grid2>

            <Grid2
              size={{ xs: 12, md: 6 }}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <SolutionCard {...solution2} />
            </Grid2>

            <SolutionCard {...solution3} />
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default GetStartedSection;
