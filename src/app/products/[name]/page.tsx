import MainHeader from "@/components/common/Typography/main-header";
import SubText from "@/components/common/Typography/sub-text";
import TabSection from "@/components/product-page/page";
import { Box, Tab } from "@mui/material";
import Image from "next/image";
import { redirect } from "next/navigation";

const bgImage: Record<string, string> = {
  afas: "/Product-page/afas.svg",
  "afas-pro": "/Product-page/afas.svg",
  atas: "/Product-page/atas_main.svg",
  "atas-pro": "/Product-page/atas_main.svg",
  awi:'/Product-page/awi.svg'
};

interface Int_product_heading {
  title: string;
  subText: string;
}

const bgContent: Record<string, Int_product_heading> = {
  afas: {
    subText:
      "The Advanced Flood Alert System (AFAS) provides localized real-time alerts 24/7, ensuring communities are prepared and protected. Designed to monitor river levels, dry riverbeds, and glacier lakes, AFAS enables authorities to detect early signs of potential flooding before disaster strikes.",
    title: "Advanced Flood Alert System (AFAS)",
  },
  "afas-pro": {
    subText:
      "The Advanced Flood Alert System (AFAS) provides localized real-time alerts 24/7, ensuring communities are prepared and protected. Designed to monitor river levels, dry riverbeds, and glacier lakes, AFAS enables authorities to detect early signs of potential flooding before disaster strikes.",
    title: "Advanced Flood Alert System (AFAS)",
  },
  atas: {
    subText:
      "The Advanced Tsunami Alert System (ATAS) is designed to provide localized real-time tsunami alerts, ensuring coastal communities and authorities have the critical time needed to act before disaster strikes. ATAS integrates predictive modeling, anomaly detection, and real-time monitoring to enhance situational awareness and preparedness.",
    title: "Advanced Tsunami Alert System (ATAS) & ATAS Pro",
  },
  "atas-pro": {
    subText:
      "The Advanced Tsunami Alert System (ATAS) is designed to provide localized real-time tsunami alerts, ensuring coastal communities and authorities have the critical time needed to act before disaster strikes. ATAS integrates predictive modeling, anomaly detection, and real-time monitoring to enhance situational awareness and preparedness.",
    title: "Advanced Tsunami Alert System (ATAS) & ATAS Pro",
  },
  awi: {
    subText:
      "In the rapidly evolving fields of port management and wave energy production, operational efficiency and safety are paramount. AWI is specifically designed to provide critical real-time data and alerts, enhancing both safety and productivity while enabling accurate validation.",
    title: "Aqua Wave Insights System (AWI)",
  },
};

const products = ["afas", "afas-pro", "atas", "atas-pro", "awi"];
export default async function ProductPage({ params }: any) {
  const { name } = await params;

  if (!products.includes(name)) {
    redirect("/products/afas");
  }

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
          src={bgImage[name] || "/Product-page/afas.svg"}
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
          }}
        >
          <MainHeader sx={{textAlign:'center'}}>{bgContent[name].title || ""}</MainHeader>
          <SubText sx={{ textAlign: "center" }}>
            {bgContent[name].subText || ""}
          </SubText>
        </Box>
      </Box>
      <TabSection name={name} />
    </Box>
  );
}
