import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import SubText from "../Typography/sub-text";
import MainHeader from "../Typography/main-header";

interface Int_content {
  imageUrl: string;
  title: string;
  legend: string;
  subtext: string;
  order1: number;
  order2: number;
}

function MidContent() {
  const content: Int_content[] = [
    {
      imageUrl: "/mid-content/enhance.svg ",
      title: "Enhanced Safety",
      legend: "Real-time insights, Instant action",
      subtext: `
Detect environmental threats with
precision. Sensor Dynamis delivers
instant alerts and predictive analytics—
helping you protect communities,
optimize operations, and safeguard
critical infrastructure.`,
      order1: 1,
      order2: 2,
    },
    {
      imageUrl: "/mid-content/efficient.svg",
      title: "Efficient Operations",
      legend: `Smarter forecasting. Better decisions.
Stronger outcomes.`,
      subtext: `
Leverage advanced analytics to anticipate
events and optimize responses—improving
preparedness, resource use, and operational
resilience across every scenario`,
      order1: 4,
      order2: 3,
    },

    {
      imageUrl: "/mid-content/betteroutcomes.svg",
      title: "Better Outcomes",
      legend: "Everyone Wins",
      subtext: `
      Unleash the Power of Prediction
      Turn uncertainty into opportunity with
      bold, data-driven insight.
      This isn’t just technology—it’s a
      transformation.
      And you’re at the forefront.`,
      order1: 5,
      order2: 6,
    },
  ];

  return (
    <Box
      sx={{
        background: "var(--White-color)",
      }}
      padding={{
        xs: "64px 10px",
        md: "80px",
      }}
    >
      <MainHeader textAlign={{ xs: "left", md: "center" }}>
        Communities and businesses rely on data-driven water solutions that put
        them first.
      </MainHeader>

      <Grid2 container spacing={2} sx={{ marginTop: "40px" }}>
        {content.map((item, index) => (
          <React.Fragment key={index}>
            <Grid2
              order={{ xs: 2 + index, md: item.order1 }}
              size={{ xs: 12, md: 6 }}
              sx={{
                backgroundImage: `url(${item.imageUrl})`,
                position: "relative",
                width: "100%",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                padding: "40px",
                borderRadius: "16px",
              }}
              minHeight={{ xs: "218px", md: "438px" }}
            ></Grid2>
            <Grid2
              order={{ xs: 1 + index, md: item.order2 }}
              size={{ xs: 12, md: 6 }}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                gap: "12px",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  borderRadius: "16px",
                  padding: "4px 12px",
                  border: "1px solid var(--light-pink)",
                  background: "var(--secondary-color)",
                }}
              >
                <Typography
                  fontSize={{ xs: "12px", md: "14px" }}
                  fontWeight={600}
                  color="var(--primary-color)"
                >
                  {item.title}
                </Typography>
              </Box>

              <Typography
                fontSize={{ xs: "16px", md: "28px" }}
                fontWeight={600}
              >
                {item.legend}
              </Typography>

              <SubText fontWeight={400} fontSize={{ xs: "12px", md: "20px" }}>
                {item.subtext}
              </SubText>
            </Grid2>
          </React.Fragment>
        ))}
      </Grid2>
    </Box>
  );
}

export default MidContent;
