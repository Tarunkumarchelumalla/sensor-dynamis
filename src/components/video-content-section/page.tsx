import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import SubText from "../Typography/sub-text";
import Image from "next/image";
import MainHeader from "../Typography/main-header";

function VideoSection() {
  const videoData = [
  {
      src:"https://www.youtube.com/embed/ecHNTGkTvpo?si=qQEZW0-9isSttLIy",
      title: "World Water Day",
      subText:
        "World Water Day falls on Mar 22. It is marked every year by the United Nations (UN) and the world to inspire positive ripple effects to tackle the global water crisis. The theme this year, amid growing concerns over wars, is “Water for Peace”. ",
    },
    {
      src:"https://www.youtube.com/embed/cl4Uv9_7KJE?si=Zn6_2-ZDXhjDz4xp",
      title: "Fleeing climate change ",
      subText:
        "Lake Chad in the Sahel zone has already shrunk by 90 percent since the 1960s due to the increasing heat. About 40 million people will be forced to migrate to places where there is enough rainfall.",
    },
    
    {
      src:"https://www.youtube.com/embed/MlS6QGFccnI?si=e_nwQ5YomsuGphIR",
      title: " Climate Edition - Extreme Weather",
      subText:
        "As Earth’s climate changes, we’re seeing shifts in the intensity of events such as record-breaking heat waves, severe floods, prolonged droughts, devastating wildfires, and stronger hurricanes",
    },
  ];

const VideoCard = (itemData: (typeof videoData)[0]) => {
  return (
    <Box
      sx={{
        borderRadius: "8px",
        background: "var(--secondary-color)",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        height: "100%", // Allow it to expand in parent grid
        maxHeight: "600px", // Optional: set a max
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "100%",
          aspectRatio: "16/9", // Responsive and consistent video height
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src={itemData.src}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </Box>

      <Box
        sx={{
          border: "1px solid #FFFFFF1A",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderBottomLeftRadius: "8px",
          borderBottomRightRadius: "8px",
          padding: "12px",
        }}
      >
        <Box>
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
          gap={"8px"}
          sx={{ cursor: "pointer", marginTop: "16px" }}
        >
          <SubText>View More</SubText>
          <Image
            src={"/testimonials/right-arrow-selected.svg"}
            alt=""
            height={14}
            width={14}
          />
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
        <MainHeader>Real-World Climate Change Impact Stories</MainHeader>
        <SubText>
          See how real-time data helps communities tackle floods, tsunamis, and
          climate risks for a safer future.
        </SubText>
      </Box>

      <Grid2 container marginTop={"40px"} spacing={4}>
        {videoData.map((el, index) => (
          <Grid2 size={{ xs: 12, md: 4 }} key={index} sx={{ display: "flex" }}>
            <VideoCard {...el} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}

export default VideoSection;
