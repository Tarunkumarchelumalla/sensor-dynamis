import ContactForm from "@/components/contact-form/page";
import { Box, Grid2 } from "@mui/material";
import React from "react";
import Image from "next/image";
import MainHeader from "@/components/common/Typography/main-header";
import SubText from "@/components/common/Typography/sub-text";

function page() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src={"/Product-page/afas.svg"}
          width={100}
          height={100}
          alt=""
          style={{
            width: "100%",
            height: "480px",
            objectFit: "cover",
          }}
        ></Image>
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
          <MainHeader sx={{ textAlign: "center" }}>{"Contact Us"}</MainHeader>
          <SubText sx={{ textAlign: "center" }}>
            {
              "In an era of rapid climate change, traditional environmental monitoring methods are no longer sufficient. Sensor Dynamis is pioneering a new approach—one that embraces data-driven forecasting, predictive analytics, and the ethical responsibility of technology in environmental management. We recognize that continuous learning and adaptation are essential, and our innovations are designed to keep decision-makers ahead of the curve."
            }
          </SubText>
        </Box>
      </Box>
      <Grid2
       container
       
      >
        <Grid2 size={{xs:12,md:6}}  sx={{
          padding: {
            xs: "40px 10px",
            md: "80px",
          },
        }}>
        <ContactForm />

        </Grid2>
        <Grid2 size={{xs:12,md:6}}>
               <Image
          src={"/contact/map.svg"}
          width={100}
          height={100}
          alt=""
          style={{
            width: "100%", 
            height:"100%", 
            objectFit: "cover",
          }}
        ></Image>

        </Grid2>
      </Grid2>
    </Box>
  );
}

export default page;
