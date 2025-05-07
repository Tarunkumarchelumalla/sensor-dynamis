import { Box, Typography } from "@mui/material";
import React from "react";
import SubText from "../Typography/sub-text";
import Image from "next/image";
import MainHeader from "../Typography/main-header";

function Pricing() {
  const sectionHeaders = [
    "Wave(AWI)",
    "Flood/River(AFAS)",
    "Reservoir/Dam(AFAS Pro)",
    "Tsunami(ATAS)",
    "Tsunami(ATAS Pro)",
    "Smart-City/Enterprise",
  ];
  const subHeaders = [
    "Real time comprehensive wave measurement, historical data (last 24 hours), notifications, cloud access, predictive alerts",
    "Real time localised aqua intelligence, trend analysis, predictive analytics, flood notifications and alerts, the power to accurately and responsibly plan ahead",
    "Real time localised aqua intelligence, trend analysis, predictive analytics, water-level notifications and alerts, the power to accurately and responsibly plan ahead",
    "Real-time comprehensive wave monitoring, API integration, historical data, custom analytics, early warning system, tsunami predictions",
    "Real-time comprehensive wave monitoring, API integration, historical data, custom analytics, early warning system, tsunami predictions including propagation speed and direction data",
    "Tailor-made solutions incorporating features from other offerings in accordance with customer specifications",
  ];

  const tableData = [
    {
      Featires: "Real-Time Monitoring",
      "Wave(AWI)": "ICON",
      "Flood/River(AFAS)": "ICON",
      "Reservoir/Dam(AFAS Pro)": "ICON",
      "Tsunami(ATAS)": "ICON",
      "Tsunami(ATAS Pro)": "ICON",
      "Smart-City/Enterprise": "ICON",
    },
    {
      Featires: "Configurable Intervals",
      "Wave(AWI)": "ICON",
      "Flood/River(AFAS)": "ICON",
      "Reservoir/Dam(AFAS Pro)": "ICON",
      "Tsunami(ATAS)": "ICON",
      "Tsunami(ATAS Pro)": "ICON",
      "Smart-City/Enterprise": "ICON",
    },
    {
      Featires: "Barometric Pressure Integration",
      "Wave(AWI)": "ICON",
      "Flood/River(AFAS)": "ICON",
      "Reservoir/Dam(AFAS Pro)": "ICON",
      "Tsunami(ATAS)": "ICON",
      "Tsunami(ATAS Pro)": "ICON",
      "Smart-City/Enterprise": "ICON",
    },
    {
      Featires:
        "Low Complexity Installation, Remote Commissioning & Maintenance",
      "Wave(AWI)": "ICON",
      "Flood/River(AFAS)": "ICON",
      "Reservoir/Dam(AFAS Pro)": "ICON",
      "Tsunami(ATAS)": "ICON",
      "Tsunami(ATAS Pro)": "ICON",
      "Smart-City/Enterprise": "ICON",
    },
    {
      Featires:
        "Remote Updates & Management (Software and hardware reliability and performance updates included)",
      "Wave(AWI)": "ICON",
      "Flood/River(AFAS)": "ICON",
      "Reservoir/Dam(AFAS Pro)": "ICON",
      "Tsunami(ATAS)": "ICON",
      "Tsunami(ATAS Pro)": "ICON",
      "Smart-City/Enterprise": "ICON",
    },
    {
      Featires: "Anomaly Detection",
      "Wave(AWI)": "ICON",
      "Flood/River(AFAS)": "ICON",
      "Reservoir/Dam(AFAS Pro)": "ICON",
      "Tsunami(ATAS)": "ICON",
      "Tsunami(ATAS Pro)": "ICON",
      "Smart-City/Enterprise": "ICON",
    },
    {
      Featires: "Predictive Analytics and Alerts",
      "Wave(AWI)": "ICON",
      "Flood/River(AFAS)": "ICON",
      "Reservoir/Dam(AFAS Pro)": "ICON",
      "Tsunami(ATAS)": "ICON",
      "Tsunami(ATAS Pro)": "ICON",
      "Smart-City/Enterprise": "ICON",
    },
    {
      Featires: "Advanced Data Integration",
      "Wave(AWI)": "ICON",
      "Flood/River(AFAS)": "ICON",
      "Reservoir/Dam(AFAS Pro)": "ICON",
      "Tsunami(ATAS)": "ICON",
      "Tsunami(ATAS Pro)": "ICON",
      "Smart-City/Enterprise": "ICON",
    },
    {
      Featires: "Renewable Low Power Consumption",
      "Wave(AWI)": "ICON",
      "Flood/River(AFAS)": "ICON",
      "Reservoir/Dam(AFAS Pro)": "ICON",
      "Tsunami(ATAS)": "ICON",
      "Tsunami(ATAS Pro)": "ICON",
      "Smart-City/Enterprise": "ICON",
    },
    {
      Featires: "Around-the-Clock Assistance from Customer Care Service Desk",
      "Wave(AWI)": "ICON",
      "Flood/River(AFAS)": "ICON",
      "Reservoir/Dam(AFAS Pro)": "ICON",
      "Tsunami(ATAS)": "ICON",
      "Tsunami(ATAS Pro)": "ICON",
      "Smart-City/Enterprise": "ICON",
    },
    {
      Featires: "Dynamic Update Rate",
      "Wave(AWI)": "ICON",
      "Flood/River(AFAS)": "ICON",
      "Reservoir/Dam(AFAS Pro)": "ICON",
      "Tsunami(ATAS)": "ICON",
      "Tsunami(ATAS Pro)": "ICON",
      "Smart-City/Enterprise": "ICON",
    },
    {
      Featires: "Predictive Analytics",
      "Wave(AWI)": "ICON",
      "Flood/River(AFAS)": "ICON",
      "Reservoir/Dam(AFAS Pro)": "ICON",
      "Tsunami(ATAS)": "ICON",
      "Tsunami(ATAS Pro)": "ICON",
      "Smart-City/Enterprise": "ICON",
    },
    {
      Featires: "Data Reliability through Operational Reliability of HW",
      "Wave(AWI)": "ICON",
      "Flood/River(AFAS)": "ICON",
      "Reservoir/Dam(AFAS Pro)": "ICON",
      "Tsunami(ATAS)": "ICON",
      "Tsunami(ATAS Pro)": "ICON",
      "Smart-City/Enterprise": "ICON",
    },
    {
      Featires: "Predictive Maintenance",
      "Wave(AWI)": "ICON",
      "Flood/River(AFAS)": "ICON",
      "Reservoir/Dam(AFAS Pro)": "ICON",
      "Tsunami(ATAS)": "ICON",
      "Tsunami(ATAS Pro)": "ICON",
      "Smart-City/Enterprise": "ICON",
    },
    {
      Featires: "Advanced Data Analytics",
      "Wave(AWI)": "ICON",
      "Flood/River(AFAS)": "ICON",
      "Reservoir/Dam(AFAS Pro)": "ICON",
      "Tsunami(ATAS)": "ICON",
      "Tsunami(ATAS Pro)": "ICON",
      "Smart-City/Enterprise": "ICON",
    },
    {
      Featires: "Data Access",
      "Wave(AWI)": "ICON",
      "Flood/River(AFAS)": "ICON",
      "Reservoir/Dam(AFAS Pro)": "ICON",
      "Tsunami(ATAS)": "ICON",
      "Tsunami(ATAS Pro)": "ICON",
      "Smart-City/Enterprise": "ICON",
    },
    {
      Featires: "Notifications",
      "Wave(AWI)": "ICON",
      "Flood/River(AFAS)": "ICON",
      "Reservoir/Dam(AFAS Pro)": "ICON",
      "Tsunami(ATAS)": "ICON",
      "Tsunami(ATAS Pro)": "ICON",
      "Smart-City/Enterprise": "ICON",
    },
  ];

  const renderTableCell = (value: any) => {
    if (value === "ICON") {
      return (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src="/Check icon.svg" alt="" height={24} width={24} />
        </Box>
      );
    }
    return (
      <SubText fontWeight={400} fontSize="14px" color="var(--black-color)">
        {value}
      </SubText>
    );
  };

  return (
    <Box
      padding={{ xs: "64px 10px", md: "80px" }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      id="solutions"
    >
      <SubText fontWeight={400} fontSize={{ xs: "16px", md: "20px" }}>
        The Future of Real-Time Data Monitoring
      </SubText>
      <MainHeader>Our Solutions</MainHeader>

      <Box overflow="auto" width="100%">
        <table className="min-w-full border border-gray-200 rounded-2xl text-center text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] mt-4">
          <thead>
            <tr className="bg-[var(--primary-light-color)] h-[44px] w-full">
              <th className="bg-[var(--primary-light-color)] h-[44px] min-w-[176.5px]"></th>
              {sectionHeaders.map((section, index) => (
                <th
                  key={`section-header-${index}`}
                  className="p-[10px] font-bold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px] text-black text-center border-r border-gray-200 h-[44px] min-w-[176.5px]"
                >
                  <SubText>{section}</SubText>
                </th>
              ))}
            </tr>
            <tr>
              <th className="py-2 px-4 font-extrabold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-black text-left bg-[var(--primary-light-color)]">
                <SubText fontWeight={600} fontSize="16px" textAlign="left">
                  Features
                </SubText>
              </th>
              {subHeaders.map((sub, index) => (
                <th
                  key={`sub-header-${index}`}
                  className="p-[10px] font-semibold text-[10px] text-gray-600 border-r border-gray-200"
                >
                  <SubText
                    fontWeight={400}
                    fontSize="14px"
                    color="var(--black-color)"
                  >
                    {sub}
                  </SubText>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr key={`row-${rowIndex}`} className="h-[44px] align-middle">
                {Object.entries(row).map(([key, value], colIndex) => (
                  <td
                    key={`cell-${rowIndex}-${colIndex}`}
                    className={`px-1 py-1 w-[140px] align-middle ${
                      value !== "ICON"
                        ? "bg-[var(--primary-light-color)] border-t border-gray-200"
                        : "border-r border-gray-200"
                    }`}
                  >
                    {renderTableCell(value)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </Box>
  );
}

export default Pricing;
