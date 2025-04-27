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
import React, { useState } from "react";
import SubText from "../Typography/sub-text";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MainHeader from "../Typography/main-header";

const productData = [
  {
    id: "afas",
    title: "Advanced Flood Alert System (AFAS)",
    description: `The Advanced Flood Alert System (AFAS) provides localized real-time alerts 24/7, ensuring
    communities are prepared and protected. Designed to monitor river levels, dry riverbeds, and glacier
    lakes, AFAS enables authorities to detect early signs of potential flooding before disaster strikes.`,
    image: "/product-section/afas.svg",
    buttons: [
      {
        title: "AFAS",
        link: "/",
      },
      {
        title: "AFAS(PRO)",
        link: "/",
      },
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
    buttons: [
      {
        title: "ATAS",
        link: "/",
      },
      {
        title: "ATAS(PRO)",
        link: "/",
      },
    ],
  },
  {
    id: "awi",
    title: "Aqua Wave Insights System (AWI)",
    description: `In the rapidly evolving fields of port management and wave energy production, operational efficiency and
safety are paramount. AWI is specifically designed to provide critical real-time data and alerts,
enhancing both safety and productivity while enabling accurate validation.`,
    image: "/product-section/awi.svg",
    buttons: [
      {
        title: "AWI",
        link: "/",
      },
    ],
  },
];

function ProductSection() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box>
      <Grid2 container >
        <Grid2
          size={{ xs: 12, md: 6 }}
          padding={{ xs: "64px 10px", md: "80px" }}
        >
          <Box>
            <MainHeader>
              Explore Our Intelligent Alert Systems
            </MainHeader>
            <SubText
              fontSize={{ xs: "16px", md: "20px" }}
              marginTop={"12px"}
              fontWeight={400}
            >
              Imagine harnessing the raw energy of localised real-time data,
              satellite imagery, the movements tracked by geolocation data, the
              subtle shifts in weather patterns, and even the clues hidden
              within energy consumption - all to anticipate weather movements.
              our platform empowers you to transfer these alternative data
              streams into actionable insights with applications for flood
              preparedness, tsunami pridiction and optimized operations.
            </SubText>
          </Box>

          {productData.map((item, index) => (
            <Box marginTop={"32px"} key={index}  sx={{
              borderRadius: "8px",
              border: '1px solid #00000003',
          }}>
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
                backgroundColor: expanded === item.id ? "#F6F9FF" : "transparent"
              }}
            >

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      borderRadius: "8px",
                      border: '1px solid #00000003',
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
        </Grid2>
        <Grid2
          size={{ xs: 12, md: 6 }}
          display={{ xs: "none", md: "flex" }}
          sx={{
            position: "relative",
            width: "100%",
            backgroundImage: "url(/product-section/product.svg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            alignItems: "flex-end", // Align text to bottom
            padding: "40px",
          }}
        >
          <Box
            sx={{
              borderRadius: "12px",
              padding: "24px",

            }}
          >
            <SubText color={'var(--white-color)'}>
              Advanced Flood Alert System (AFAS) is designed to provide
              localized real-time alerts 24/7, ensuring your community is
              prepared and protected.
            </SubText>
            <Box
   
              color="var(--highlight-color)"
              display={'flex'}
              flexDirection={'row'}
              gap={'8px'}
              sx={{
                cursor:'pointer'
              }}
            >
              <SubText            fontWeight={700}
              fontSize={{ xs: "14px", md: "24px" }}>View More</SubText>
              <Image src={'/product-section/right-yellow-arrow.svg'} alt={""} height={32} width={32}></Image>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default ProductSection;
