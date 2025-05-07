"use client";

import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid2,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SubText from "../Typography/sub-text";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MainHeader from "../Typography/main-header";

const productData = [
  {
    id: "afas",
    title: "Advanced Flood Alert System (AFAS)",
    description: `AFAS monitors water levels, flow, and quality across rivers, dams, and reservoirs.
It enables early flood alerts, water scarcity detection, and smarter decisions.
Built for resilience and ready to scale.
Empowering governments and communities to manage water responsibly.`,
    xsImage: "/afas-secondary-logo.svg",
    image: "/product-section/afas.svg",
    buttons: [
      { title: "AFAS", link: "/" },
      { title: "AFAS(PRO)", link: "/" },
    ],
  },
  {
    id: "atas",
    title: "Advanced Tsunami Alert System (ATAS)",
    description: `The Advanced Tsunami Alert System (ATAS) is designed to provide localized real-time tsunami alerts,
ensuring coastal communities and authorities have the critical time needed to act before disaster
strikes. ATAS integrates predictive modeling, anomaly detection, and real-time monitoring to enhance
situational awareness and preparedness.`,
    image: "/product-section/atas.svg",
    xsImage: "/atas-secondary-logo.svg",
    buttons: [
      { title: "ATAS", link: "/" },
      { title: "ATAS(PRO)", link: "/" },
    ],
  },
  {
    id: "awi",
    title: "Aqua Wave Insights System (AWI)",
    description: `In the rapidly evolving fields of port management and wave energy production, operational efficiency and
safety are paramount. AWI is specifically designed to provide critical real-time data and alerts,
enhancing both safety and productivity while enabling accurate validation.`,
    image: "/product-section/awi.svg",
    xsImage: "/awi-secondary-logo.svg",
    buttons: [
      { title: "AWI", link: "/" },
    ],
  },
];

const afasImage = [
  "/product-section/afas_image_1.svg",
  "/product-section/afas_image_2.svg",
];
const atasImage = [
  "/product-section/atas_image_1.svg",
  "/product-section/atas_image_2.svg",
];
const awiImage = [
  "/product-section/awi_image_1.svg",
  "/product-section/awi_image_2.svg",
  "/product-section/awi_image_3.svg",
];

const CardComponent = (item: (typeof productData)[0]) => {
  let imageSrc = "";
  switch (item.id) {
    case "afas":
      imageSrc = afasImage[0];
      break;
    case "atas":
      imageSrc = atasImage[0];
      break;
    case "awi":
      imageSrc = awiImage[0];
      break;
    default:
      imageSrc = "/product-section/product.svg";
  }

  return (
    <Box
      sx={{
        display: {
          xs: "flex",
          md: "none",
        },
        flexDirection: "column",
        gap: "12px",
        marginTop: "16px",
      }}
    >
      <Image src={item.xsImage} alt={""} height={24} width={24} />
      <SubText fontSize={"14px"} sx={{ fontWeight: 600 }}>
        {item.title}
      </SubText>
      <SubText fontSize={"14px"}>{item.description}</SubText>
      <Box
        color="var(--black-color)"
        display={"flex"}
        flexDirection={"row"}
        gap={"8px"}
        sx={{ cursor: "pointer" }}
      >
        <SubText fontWeight={700} fontSize={{ xs: "14px", md: "24px" }}>
          View More
        </SubText>
        <Image
          src={"/testimonials/right-arrow.svg"}
          alt={""}
          height={10}
          width={10}
        />
      </Box>
      <Image
        src={imageSrc}
        alt=""
        height={218}
        width={32}
        style={{
          width: "100%",
          height: "218px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
    </Box>
  );
};

function ProductSection() {
  const [expanded, setExpanded] = useState<string>("afas");
  const [index, setIndex] = useState(0);

  const getBackgroundImages = () => {
    if (expanded === "atas") return atasImage;
    if (expanded === "awi") return awiImage;
    return afasImage;
  };

  const backgroundImages = getBackgroundImages();

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : "afas");
      setIndex(0); // Reset background slider
    };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [backgroundImages]);

  return (
    <Box>
      <Grid2 container>
        <Grid2
          size={{ xs: 12, md: 6 }}
          padding={{ xs: "64px 10px", md: "80px" }}
        >
          <Box>
            <MainHeader>Explore Our Intelligent Solutions</MainHeader>
            <SubText
              fontSize={{ xs: "16px", md: "20px" }}
              marginTop={"12px"}
              fontWeight={400}
            >
              Imagine transforming raw, real-time data—from local readings,
              satellite imagery and geolocation movement to shifting weather
              patterns and energy usage—into clear, actionable intelligence. Our
              platform harnesses these diverse data streams to anticipate water
              dynamics and their impacts, empowering faster, smarter decisions
              where resilience is non-negotiable.
            </SubText>
          </Box>

          {productData.map((item, i) => (
            <Box
              marginTop={"32px"}
              key={i}
              sx={{
                borderRadius: "8px",
                border: "1px solid #00000003",
                display: {
                  xs: "none",
                  md: "flex",
                },
              }}
            >
              <Accordion
                expanded={expanded === item.id}
                onChange={handleChange(item.id)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                  sx={{
                    padding: "16px 16px 16px 0px",
                    height: "74px",
                    backgroundColor:
                      expanded === item.id ? "#F6F9FF" : "transparent",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      borderRadius: "8px",
                      border: "1px solid #00000003",
                      gap: "12px",
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: 66, md: 74 },
                        height: { xs: 66, md: 74 },
                        borderRadius: "8px",
                        overflow: "hidden",
                        flexShrink: 0,
                        position: "relative",
                      }}
                    >
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="(max-width: 600px) 66px, 74px"
                        style={{ objectFit: "cover" }}
                      />
                    </Box>

                    <SubText
                      fontSize={{ xs: "16px", md: "24px" }}
                      fontWeight={600}
                    >
                      {item.title}
                    </SubText>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>{item.description}</AccordionDetails>
                <AccordionActions>
                  {item.buttons.map((btn, i) => (
                    <Button key={i}>{btn.title}</Button>
                  ))}
                </AccordionActions>
              </Accordion>
            </Box>
          ))}

          {productData.map((item, index) => (
            <CardComponent {...item} key={index} />
          ))}
        </Grid2>
        <Grid2
          size={{ xs: 12, md: 6 }}
          display={{ xs: "none", md: "flex" }}
          sx={{
            position: "relative",
            width: "100%",
            alignItems: "flex-end",
            overflow: "hidden",
          }}
        >
          {/* Background image */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              zIndex: 0,
            }}
          >
            <Image
              src={backgroundImages[index]}
              alt="Background"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </Box>

          {/* Text Content */}
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              borderRadius: "12px",
              padding: "24px",
            }}
          >
            <SubText color={"var(--white-color)"}>
              {productData.find((d) => d.id === expanded)?.description ||
                "Advanced Flood Alert System (AFAS) is designed to provide localized real-time alerts 24/7, ensuring your community is prepared and protected."}
            </SubText>

            <Box
              color="var(--highlight-color)"
              display={"flex"}
              flexDirection={"row"}
              gap={"8px"}
              sx={{ cursor: "pointer" }}
            >
              <SubText fontWeight={700} fontSize={{ xs: "14px", md: "24px" }}>
                View More
              </SubText>
              <Image
                src={"/product-section/right-yellow-arrow.svg"}
                alt=""
                height={32}
                width={32}
              />
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default ProductSection;
