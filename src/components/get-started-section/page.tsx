import { Box, Button, Grid2, Typography } from "@mui/material";
import React from "react";
import SubText from "../Typography/sub-text";
import Image from "next/image";

function GetStartedSection() {
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
        xs: "10px 24px",
        md: "80px",
      }}
    >
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
      >
        <Box>
          <Typography fontSize={"36px"}>Proactive Forecasting</Typography>
          <SubText
            marginTop={"12px"}
            fontSize={{ xs: "14px", md: "20px" }}
            fontWeight={400}
            maxWidth={'746px'}
          >
            Getting started is simple, Whatever your organisation's size, let
            our real-time aqua intelligence platform power your decision.
          </SubText>
        </Box>
        <Box>
          <Button
            sx={{
              background: "var(--white-color)",
              borderRadius: "8px",
              border: "1px solid #D5D7DA",
              color: "var(--gray-color)",
              fontWeight: 700,
              fontSize: "16px",
              textTransform: "none",
            }}
            endIcon={
              <Image
                src={"/get-started-section/right-black-arrow.svg"}
                alt={""}
                width={24}
                height={24}
              ></Image>
            }
          >
            Get Started
          </Button>
        </Box>
      </Box>

      <Grid2></Grid2>

    </Box>
  );
}

export default GetStartedSection;
