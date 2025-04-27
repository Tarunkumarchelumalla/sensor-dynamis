import { Box, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import SubHeader from "../Typography/sub-header";
import SubText from "../Typography/sub-text";

function WhyItMattersSection() {
  const blogData = [
    {
      image: "/last-content/blogImage2.svg",
      title: "Early Warning Systems (EWS)",
      subtext:
        "Many Early Warning Systems (EWS) fall short due to their inability to measure and analyze real-time water dynamics. Since disasters like floods, tsunamis, and dam failures are driven by change",
    },
    {
      image: "/last-content/blogImage3.svg",
      title: "Real-time environmental intelligence",
      subtext:
        "Real-time monitoring of water levels and flow dynamics enables early flood and tsunami detection, protects critical infrastructure, and improves forecasting",
    },
  ];

  const MainBlogCard = () => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        <Image
          src={"/last-content/blogImage1.svg"}
          alt={""}
          width={624}
          height={200}
          style={{
            width: "100%",
            minHeight:"240px",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        ></Image>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <SubHeader textAlign={"left"}>
            Real-time environmental intelligence
          </SubHeader>
          <SubText>
            {" "}
            Real-time environmental intelligence is the insight gained from
            assimilating and analyzing real-time local sensor data with advanced
            analytics and AI. Using advanced algorithms the data transforms into
            pragmatic, actionable and unique insights. Leaders use real-time
            environmental intelligence to better understand and predict the
            progress of water-related events and plan what to do next.
          </SubText>
          <Box
            display={"flex"}
            flexDirection={"row"}
            gap={"8px"}
            sx={{
              cursor: "pointer",
            }}
          >
            <SubText>View More</SubText>
            <Image
              src={"/testimonials/right-arrow.svg"}
              alt={""}
              height={14}
              width={14}
            ></Image>
          </Box>
        </Box>
      </Box>
    );
  };

  const BlogCard = (item: (typeof blogData)[0]) => {
    return (
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Image
            src={item.image}
            alt={""}
            width={624}
            height={200}
            style={{
              width: "100%",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          ></Image>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <SubHeader textAlign={"left"}>{item.title}</SubHeader>
          <SubText>{item.subtext}</SubText>
          <Box
            display={"flex"}
            flexDirection={"row"}
            gap={"8px"}
            sx={{
              cursor: "pointer",
            }}
          >
            <SubText>View More</SubText>
            <Image
              src={"/testimonials/right-arrow.svg"}
              alt={""}
              height={14}
              width={14}
            ></Image>
          </Box>
        </Grid2>
      </Grid2>
    );
  };

  return (
    <Box
      sx={{
        padding: {
          xs: " 64px 10px",
          md: "80px",
        },
        color: "var(--black-color)",
        background: "var(--white-color)",
      }}
    >
      <Typography
        textAlign={"left"}
        fontWeight={600}
        fontSize={{ xs: "24px", md: "36px" }}
      >
        What We Do. Why It Matters.
      </Typography>

      <Grid2 container marginTop={"32px"} spacing={4}>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <MainBlogCard />
        </Grid2>

        
            <Grid2 size={{ xs: 12, md: 6 }} display={'flex'}flexDirection={'column'} gap={'32px'}>
        {blogData.map((item, index) => (
              <BlogCard {...item} key={index} />
            ))}
            </Grid2>

      </Grid2>
    </Box>
  );
}

export default WhyItMattersSection;
