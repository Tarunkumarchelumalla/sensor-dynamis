import { Box } from "@mui/material";
import MainHeader from "@/components/common/Typography/main-header";
import SubText from "@/components/common/Typography/sub-text";

const sectionHeaders = [
  "Features",
  "Sensor Dynamis",
  "Traditional Sensor Companies",
  "Dashboard-Only Competitors",
];

const tableData = [
  {
    feature: "Real-time alerts & predictive intelligence",
    sensorDynamis: "✅ Native & integrated",
    traditional: "❌ Alerts only, often manual",
    dashboardOnly: "✅ Alerts, but dependent on 3rd-party data",
  },
  {
    feature: "End-to-end ownership (hardware + platform)",
    sensorDynamis: "✅ Fully integrated",
    traditional: "✅ Hardware only",
    dashboardOnly: "❌ Software only",
  },
  {
    feature: "Customization per sector (Ports, Fish Farms, Tsunami etc.)",
    sensorDynamis: "✅ Pre-built & configurable",
    traditional: "❌ One-size-fits-all",
    dashboardOnly: "✅ But needs integration",
  },
  {
    feature: "Remote commissioning & OTA updates",
    sensorDynamis: "✅ Plug & play, zero-site visits",
    traditional: "❌ On-site only",
    dashboardOnly: "N/A",
  },
  {
    feature: "Long-term autonomy (no power/signal)",
    sensorDynamis: "✅ 6+ months, even submerged",
    traditional: "❌ Requires external power or battery replacement",
    dashboardOnly: "N/A",
  },
  {
    feature: "AI-driven anomaly detection & trends",
    sensorDynamis: "✅ Native analytics engine",
    traditional: "❌ None or basic thresholds",
    dashboardOnly: "✅ With external integration",
  },
  {
    feature: "Federation & open data sharing",
    sensorDynamis: "✅ API + multi-tenant platform",
    traditional: "❌ Device-centric",
    dashboardOnly: "✅ Limited, not sensor-backed",
  },
];

const SolutionComparisonTable = () => {
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
      <MainHeader>Our Solutions Vs Competitors</MainHeader>

      <Box overflow="auto" width="100%">
        <table className="min-w-full border border-gray-200 rounded-2xl text-center text-[10px] md:text-[12px] mt-4">
          <thead>
            <tr className="bg-[var(--primary-light-color)] h-[94px]">
              {sectionHeaders.map((section, index) => (
                <th
                  key={`section-header-${index}`}
                  className="px-4 font-bold text-black text-left border-r border-gray-200 h-[44px] min-w-[176.5px]"
                >
                  <SubText>{section}</SubText>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row: any, rowIndex) => (
              <tr key={`row-${rowIndex}`} className="h-[44px] align-middle">
                <td className="px-4 py-2 text-left font-medium bg-[var(--primary-light-color)] border-t border-gray-200">
                  <SubText fontWeight={400} fontSize="14px">
                    {row.feature}
                  </SubText>
                </td>
                {["sensorDynamis", "traditional", "dashboardOnly"].map(
                  (key, colIndex) => (
                    <td
                      key={`cell-${rowIndex}-${colIndex}`}
                      className={`px-4 py-4    text-left   ${
                        row[key] !== "ICON"
                          ? "bg-[var(--white-color)] border-[1px] border-gray-200"
                          : "border-[1px] border-gray-200"
                      }`}
                    >
                      <SubText
                        fontWeight={400}
                        sx={{

                            fontSize:'16px'
                        }}
                        color="var(--black-color)"
                      >
                        {row[key]}
                      </SubText>
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </Box>
  );
};

export default SolutionComparisonTable;
