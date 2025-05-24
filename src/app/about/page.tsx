"use client";

import HeroSection from '@/components/common/sections/hero-section/page'
import { Box, Grid2, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import Image from "next/image"
import SubHeader from '@/components/common/Typography/sub-header'
import SubText from '@/components/common/Typography/sub-text'

interface ValueCardProps { 
  image: string
  title: string
  description: string
  points: { title: string; content: string }[]
}

const ValueCard = ({ image, title, description, points }: ValueCardProps) => (
  <Grid2 container spacing={4} sx={{ marginTop: "40px" }}>
    <Grid2 size={{ xs: 12, md: 6 }}>
      <Image
        src={image}
        alt={title}
        width={1000}
        height={500}
        style={{
          width: "100%",
          height: "438px",
          objectFit: "cover",
          borderRadius: "12px",
        }}
      />
    </Grid2>
    <Grid2
      size={{ xs: 12, md: 6 }}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography variant="h5" sx={{ mb: 2 }}>{title}</Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>{description}</Typography>
      <ul style={{ paddingLeft: 0, marginTop: "16px" }}>
        {points.map((point, index) => (
          <li
            key={index}
            style={{
              position: "relative",
              paddingLeft: "1rem",
              marginTop: "12px",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: 0,
                top: 15,
                width: 5,
                height: 5,
                borderRadius: "50%",
                backgroundColor: "var(--primary-color)",
              }}
            />
            <Typography variant="body1">
              <span style={{ fontWeight: "bold" }}>{point.title}</span>
              {point.content}
            </Typography>
          </li>
        ))}
      </ul>
    </Grid2>
  </Grid2>
)

const aboutusData: Int_aboutus_card[] = [
  {
    title: "Our Mission",
    image: "/landing-page/get-started-section/flood-image.svg",
    description: "At Sensor Dynamis, we are revolutionizing environmental intelligence with cutting-edge sensor technology and cloud-based analytics. We aim to simplify complex processes, enhance operational efficiency, and drive growth through our innovative software and services. Our proprietary systems provide real-time water-level monitoring, sediment assessment, and predictive analytics, delivering critical insights for flood prevention, tsunami detection, and aquatic environmental management which enable our clients to anticipate the impact of climate change and effectively navigate the ever-changing landscape.",
    order:"image-first"
  },
  {
    title: "Our Vision",
    image: "/landing-page/get-started-section/flood-image.svg",
    description: "Environments alike are shaped by patterns, cycles, and human decisions. At the heart of our vision is a future where communities and businesses alike harness the power of technology to achieve remarkable feats which preserve life and property whilst optimizing operations. We reimagine environmental forecasting with robust local technology, fractal patterns, time cycles, and AI-driven predictions, applied to aquatic environmental intelligence. By fusing traditional data collection with machine learning, alternative data sources, and behavioural insights, we unlock new possibilities for anticipating environmental shifts.",
    order:"content-first"
  },
  {
    title: "Our Values",
    image: "/landing-page/get-started-section/flood-image.svg",
    description: `We uphold the highest ethical standards, ensuring transparency, honesty, and trust in all our interactions. Innovation fuels our creativity, driving us to explore new horizons and develop groundbreaking solutions.`,
    order: 'image-first'
  },
];

const teamData: Int_team_card[] = [
  {
    title: "Dorothea Tomazos",
    description: "Chief Executive Officer",
    image: "/landing-page/get-started-section/flood-image.svg",
  },
  {
    title: "Ralf Spriesterbach",
    description: "Chief Technology Officer",
    image: "/landing-page/get-started-section/flood-image.svg",
  },
  {
    title: "Joan Ramon Juncas Noguer",
    description: "Chief Financial Officer",
    image: "/landing-page/get-started-section/flood-image.svg",
  },
  {
    title: "Dimitrios Lygeris",
    description: "Iconoclastic Inventor & Founder",
    image: "/landing-page/get-started-section/flood-image.svg",
  },
  {
    title: "Leonidas Sampanis",
    description: "Project Manager & Creative Director",
    image: "/landing-page/get-started-section/flood-image.svg",
  },
  {
    title: "Chrysostomos Koumides",
    description: "Lead Software Engineer",
    image: "/landing-page/get-started-section/flood-image.svg",
  },
];


interface Int_aboutus_card{
title:string,
description:string,
image:string,
order:string
}

interface Int_team_card{
title:string,
description:string,
image:string,
}

const ProductFeatureCard = (item: Int_aboutus_card) => {
  const xs = useMediaQuery("(max-width:800px)");

  return (
    <Grid2 container spacing={4} marginTop={"40px"}>
      <Grid2 
        size={{ xs: 12, md: 6 }}
        sx={{ 
          order: item.order === 'content-first' ? 2 : 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <SubHeader>{item.title}</SubHeader>

        <SubText sx={{
        marginTop:'20px'}}>{item.description}</SubText>

      </Grid2>
      <Grid2 
        size={{ xs: 12, md: 6 }}
        sx={{ 
          order: item.order === 'content-first' ? 1 : 2,
        }}
      >
        <Image
          src={item.image}
          alt=""
          width={100}
          height={100}
          style={{
            width: "100%",
            height: !xs ? "438px" : "280px",
            objectFit: "cover",
          }}
        />
      </Grid2>
    </Grid2>
  );
};

const TeamCard = (item: Int_team_card) => {
  return (
    <Box  sx={{
      display:'flex',
      flexDirection:'column',
      alignItems:'start',
      width:'100%',
      justifyContent:'start',
      gap:'8px'
    }}>

        <Image
          src={item.image}
          alt=""
          width={100}
          height={100}
          style={{
            width: "100%",
            height: "296px",
            objectFit: "cover",
          }}
        />

        <SubText sx={{fontSize:'16px',fontWeight:'600'}}>{item.title}</SubText>
        <SubText sx={{color:'var(--primary-dark-color)',fontSize:'16px'}}>{item.description}</SubText>

    </Box>
  );
};

export default function page() {
  return (
    <Box>
      <HeroSection
        title="About Us"
        description="In an era of rapid climate change, traditional environmental monitoring methods are no longer sufficient. Sensor Dynamis is pioneering a new approach—one that embraces data-driven forecasting, predictive analytics, and the ethical responsibility of technology in environmental management. We recognize that continuous learning and adaptation are essential, and our innovations are designed to keep decision-makers ahead of the curve."
        imageSrc="/Product-page/afas.svg"
      />

      {aboutusData.length > 0 && (
        <Box
          sx={{
            padding: {
              xs: "40px 10px",
              md: "80px",
            },
            background: "var(--white-color)",
          }}
        >
          {aboutusData.map((item, index) => (
            <ProductFeatureCard {...item} key={index} />
          ))}
        </Box>
      )}

      <Box sx={{ 
        padding: {
          xs: "40px 10px",
          md: "80px",
        },
        background: "var(--primary-light-color)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
       }}>
        <SubHeader>We’re a results-driven team.</SubHeader>
        <SubText marginTop="12px" maxWidth={"700px"} textAlign={"center"} color={"var(--gray-color)"}>
        With a passion for innovation and a dedication to excellence, we bring diverse expertise to every project we undertake.
        </SubText>


        <Grid2 container spacing={4} marginTop="40px">
        

        {teamData.length > 0 && teamData.map((item, index) => (
          <Grid2 size={{ xs: 12, md: 4 }} key={index}>
            <TeamCard {...item} />
          </Grid2>
        ))}
        </Grid2>
      </Box>
    </Box>
  );
}
