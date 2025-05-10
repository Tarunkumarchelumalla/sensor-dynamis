"use client";

import { Tabs, Tab } from "@mui/material";
import React, { useEffect } from "react";

const tabsList: any = {
  afas: [
    {
      tabName: "AFAS",
      value: "afas",
    },
    {
      tabName: "AFAS(PRO)",
      value: "afas-pro",
    },
  ],
  "afas-pro": [
    {
      tabName: "AFAS",
      value: "afas",
    },
    {
      tabName: "AFAS(PRO)",
      value: "afas-pro",
    },
  ],
  atas: [
    {
      tabName: "ATAS",
      value: "atas",
    },
    {
      tabName: "ATAS(PRO)",
      value: "atas-pro",
    },
  ],
  "atas-pro": [
    {
      tabName: "ATAS",
      value: "atas",
    },
    {
      tabName: "ATAS(PRO)",
      value: "atas-pro",
    },
  ],
  awi: [
    {
      tabName: "AWI",
      value: "awi",
    },
  ],
};

function TabSection({ name }: { name: string }) {
  const [value, setValue] = React.useState(tabsList[name][0][name]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };


  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="centered tabs example"
      centered
      sx={{
        height: "64px",
        display: "flex",
        alignItems: "center",
        background: "var(--primary-dark-color)",
        "& .MuiTab-root": {
          color: "white",
          height: "100%", // ✅ full height for tab
          minHeight: "64px", // optional, to ensure consistency
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          fontWeight: 600,
        },
        "& .Mui-selected": {
          color: "var(--black-color) !important",
          background: "var(--highlight-color)",
        },
        "& .MuiTabs-indicator": {
          display: "none",
        },
      }}
    >
      {name &&
        tabsList[name].map((item: any, index: number) => (
          <Tab label={item.tabName} key={index} value={item.value}/>
        ))}
    </Tabs>



  );
}

export default TabSection;
