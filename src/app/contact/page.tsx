import ContactForm from "@/components/contact-form/page";
import { Box, Grid2 } from "@mui/material";
import React from "react";
import HeroSection from "@/components/common/sections/hero-section/page";
import Image from 'next/image';
import AnimatedContent from "@/components/common/animations/animated-content/page";

function page() {
  return (
    <Box>
      <HeroSection
        title="Contact Us"
        description="In an era of rapid climate change, traditional environmental monitoring methods are no longer sufficient. Sensor Dynamis is pioneering a new approach—one that embraces data-driven forecasting, predictive analytics, and the ethical responsibility of technology in environmental management. We recognize that continuous learning and adaptation are essential, and our innovations are designed to keep decision-makers ahead of the curve."
        imageSrc="/Product-page/afas.svg"
      />
      <Grid2
        container
        spacing={2}
        display={'flex'}
        width={'100%'}
      >
        <Grid2 size={{ xs: 12, md: 6 }} sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}>
          <AnimatedContent delay={0.3}>
            <ContactForm />
          </AnimatedContent>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }} sx={{
          display: 'flex',
        }}>

            <Box sx={{
              width:'100%',
            }}>
            <Image
              src={"/contact/map.svg"}
              width={100}
              height={100}
              alt="Contact Map"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default page;
