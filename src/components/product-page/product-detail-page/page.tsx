import MainHeader from "@/components/common/Typography/main-header";
import SubHeader from "@/components/common/Typography/sub-header";
import SubText from "@/components/common/Typography/sub-text";
import WhyItMattersSection from "@/components/landing-page/why-it-matters-section/page";
import { Box, Button, Grid2, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AnimatedContent from "@/components/common/animations/animated-content/page";

const productCardContent: any = {
  afas: {
    image1: "/Product-page/afas_benefits_1.svg",
    title1: "Rapid Warning Dissemination",
    content1:
      "Critical alerts delivered within minutes via 112, SMS, social media, and other channels.",
    image2: "/Product-page/afas_benefits_3.svg",
    title2: "Accurate & Relevant Predictions",
    content2:
      "Advanced algorithms, IoT, and AI ensure reliable forecasts tailored to specific regions.",
    image3: "/Product-page/afas_benefits_2.svg",
    title3: "Community Engagement:",
    content3:
      "Provides timely information and regular updates, enhancing safety and trust.",
  },
  "afas-pro": {
    image1: "/landing-page/product-section/afas_image_2.svg",
    title1: "Proactive Water Management",
    content1: `Helps municipalities plan and respond to potential shortages before they escalate.`,
    image2: "/Product-page/exaplain.svg",
    title2: "Accurate Consumption Forecasts",
    content2:
      "Predicts future water needs based on historical and real-time data.",
    image3: "/Product-page/afas_pro_benefits_1.svg",
    title3: "Sustainable Resource Allocation",
    content3:
      "Ensures efficient distribution while preventing unnecessary restrictions.",
  },
  atas: {
    image1: "/landing-page/product-section/atas_image_1.svg",
    title1: "Rapid Warning Dissemination",
    content1:
      "Critical tsunami alerts delivered within minutes to authorities and responders.",
    image2: "/landing-page/product-section/atas_image_2.svg",
    title2: "Accurate Predictions",
    content2:
      "AI and IoT-based forecasts ensure precise and localized tsunami warnings.",
    image3: "/Product-page/atas_benefits_1.svg",
    title3: "Community Engagement",
    content3:
      "Keeps citizens informed with timely alerts, improving safety and trust.",
  },
  "atas-pro": {
    image1: "/landing-page/product-section/atas_image_1.svg",
    title1: "Advanced Propagation Analysis",
    content1:
      "Predicts tsunami direction, speed, and impact zones for better preparedness.",
    image2: "/Product-page/analysis.svg",
    title2: "Infrastructure Monitoring",
    content2:
      "Safeguards ports, seawalls, and coastal defenses with proactive alerts.",
    image3: "/Product-page/atas_pro_1.svg",
    title3: "Seamless Smart-City Integration",
    content3:
      "Connects with municipal platforms to streamline disaster response.",
  },
  awi: {
    image1: "/Product-page/awi_benefits.svg", // Add image for Proactive Risk Management
    title1: "Proactive Risk Management",
    content1:
      "Anticipate storms and operational hazards to ensure safety and uptime.",
    image2: "/Product-page/rough-waves.svg", // Add image for Optimized Operations
    title2: "Optimized Operations",
    content2:
      "Use accurate forecasts to improve energy production and harbor logistics.",
    image3: "/landing-page/product-section/awi_image_3.svg", // Add image for Regulatory Compliance
    title3: "Regulatory Compliance",
    content3:
      "Validate operations with robust, verifiable monitoring and reporting tools.",
  },
};

const Productfeatures: Record<string, Int_feature_card_props[]> = {
  afas: [
    {
      title: "Core Features",
      points: [
        {
          content:
            "Continuous data collection analysed by AI-driven sensors with advanced algorithms.",
          title: "Real-Time Monitoring: ",
        },
        {
          content:
            "Tailored warnings based on local needs, including flooding, severe weather, and water management.",
          title: "Customisable Alerts: ",
        },
        {
          content:
            "Easy access for emergency responders and officials with clear visualisations and data insights.",
          title: "User-Friendly Interface:  ",
        },
        {
          content:
            "Compatible with existing municipal systems, enhancing response strategies without disruption",
          title: "Seamless Integration:  ",
        },
      ],
      src: "/Product-page/afas_feature_1.svg",
    },
    {
      title:
        "Flood Prevention & Detection By continuously tracking water levels, AFAS:",
      points: [
        {
          content: "sudden rises in river levels due to upstream rainfall.",
          title: "Detects ",
        },
        {
          content:
            "dry riverbeds that can rapidly transform into flood channels.",
          title: "Monitors ",
        },
        {
          content: " water flow behaviour to assess flood risk in real-time.",
          title: "Analyses",
        },
      ],
      src: "/Product-page/afas_feature_2.svg",
    },
    {
      title: "This enables authorities to",
      points: [
        {
          content:
            "Issue early flood warnings, giving communities valuable time to prepare",
          title: "",
        },
        {
          content: "Mobilise emergency response teams for proactive mitigation",
          title: "",
        },
        {
          content:
            "Trigger evacuation protocols to minimise damage and save lives.",
          title: "",
        },
        {
          content:
            "Prioritise support for the most vulnerable community members.",
          title: "",
        },
      ],
      src: "/Product-page/afas_feature_3.svg",
    },
  ],

  "afas-pro": [
    {
      title: "Core Features",
      points: [
        {
          content:
            " Tracks reservoir water levels and analyzes trends with AIpowered predictive analytics.",
          title: "Real-Time Monitoring: ",
        },
        {
          content:
            " Provides early warnings about decreasing water levels and upcoming shortages.",
          title: "Customisable Alerts: ",
        },
        {
          content:
            "Offers easy-touse dashboards with actionable insights for municipal authorities.",
          title: "User-Friendly Interface:  ",
        },
        {
          content:
            "Works with existing water management systems to improve decision-making without disruption.",
          title: "Seamless Integration:  ",
        },
      ],
      src: "/landing-page/mid-content/enhance.svg",
    },
    {
      title:
        "Infrastructure Monitoring & Preventive Maintenance By continuously tracking water infrastructure conditions, AFAS Pro:",
      points: [
        {
          content: "early signs of dam wear and structural vulnerabilities.",
          title: "Detects ",
        },
        {
          content:
            "predictive maintenance alerts to prevent costly repairs and failures.",
          title: "Issues ",
        },
        {
          content:
            "system integrity, ensuring water supply stability and safety",
          title: "Monitors ",
        },
      ],
      src: "/Product-page/Pezi_Ikaria.svg",
    },
    {
      title: "This enables municipalities to:",
      points: [
        {
          content:
            "Implement timely maintenance measures, extending infrastructure lifespan.",
          title: "",
        },
        {
          content:
            "Optimize resource allocation for preventive actions rather than emergency repairs.",
          title: "",
        },
        {
          content:
            "Enhance water security, reducing risks associated with reservoir failures and shortages.",
          title: "",
        },
        {
          content:
            "Prioritise support for the most vulnerable community members.",
          title: "",
        },
      ],
      src: "/Product-page/afas_pro_feature_3.svg",
    },
  ],
  atas: [
    {
      title: "Core Features",
      points: [
        {
          title: "Real-Time Monitoring: ",
          content:
            "Continuous wave tracking and anomaly detection with AI analytics.",
        },
        {
          title: "Predictive Modeling & Detection: ",
          content:
            "Specialized AI models detect irregular wave patterns and potential tsunami threats.",
        },
        {
          title: "Customizable Alerts: ",
          content:
            "Sends tailored notifications for varying risk levels across multiple platforms.",
        },
        {
          title: "Seamless Integration: ",
          content:
            "Integrates with existing tsunami and municipal disaster systems.",
        },
      ],
      src: "/landing-page/mid-content/enhance.svg",
    },
    {
      title: "Tsunami Prediction & Risk Mitigation",
      points: [
        {
          title: "Detects ",
          content: "abnormal wave patterns and sudden sea level changes.",
        },
        {
          title: "Monitors ",
          content: "tsunami speed and direction in real-time.",
        },
        {
          title: "Utilizes ",
          content: "historical and live data to enhance forecast accuracy.",
        },
      ],
      src: "/Product-page/atas_benefits_2.svg",
    },
    {
      title: "This enables authorities to:",
      points: [
        {
          title: "",
          content:
            "Issue early warnings to facilitate evacuation and preparedness.",
        },
        {
          title: "",
          content: "Mobilize emergency response for proactive management.",
        },
        {
          title: "",
          content:
            "Protect infrastructure through data-driven decision-making.",
        },
      ],
      src: "/landing-page/product-section/atas_image_2.svg",
    },
  ],
  "atas-pro": [
    {
      title: "Core Features",
      points: [
        {
          title: "Real-Time Monitoring: ",
          content:
            "Tracks wave activity, barometric pressure, and sea levels using AI and IoT.",
        },
        {
          title: "Predictive Analytics & Alerts: ",
          content:
            "Delivers real-time tsunami data including speed, height, and impact zones.",
        },
        {
          title: "Infrastructure Monitoring: ",
          content:
            "Evaluates tsunami risk to ports, seawalls, and other coastal infrastructure.",
        },
        {
          title: "Customizable Notifications: ",
          content:
            "Issues early alerts to officials and businesses for timely, informed action.",
        },
        {
          title: "Seamless Integration: ",
          content:
            "Works with existing disaster response systems to optimize reaction time.",
        },
      ],
      src: "/Product-page/wind_monitoring.svg", // Your feature image here
    },
    {
      title:
        "Coastal Protection & Infrastructure Resilience – By continuously tracking tsunami propagation, ATAS Pro:",
      points: [
        {
          title: "Predicts ",
          content: "wave arrival times and severity of impact.",
        },
        {
          title: "Identifies ",
          content: "vulnerabilities in coastal infrastructure before failure.",
        },
        {
          title: "Issues ",
          content:
            "maintenance alerts for flood barriers and port systems to prevent disruption.",
        },
      ],
      src: "/landing-page/product-section/awi_image_1.svg", // Your feature image here
    },
    {
      title: "This enables municipalities to:",
      points: [
        {
          title: "",
          content:
            "Safeguard harbors and coastal cities through early interventions.",
        },
        {
          title: "",
          content:
            "Improve evacuation and response plans using real-time tsunami data.",
        },
        {
          title: "",
          content:
            "Reduce infrastructure damage and financial losses with preemptive measures.",
        },
      ],
      src: "/landing-page/product-section/awi_image_3.svg", // Your feature image here
    },
  ],
  awi: [
    {
      title: "Core Features",
      points: [
        {
          title: "Real-Time Monitoring: ",
          content:
            "Continuous data from IoT ocean sensors delivers precise marine intelligence.",
        },
        {
          title: "Predictive Modeling & Anomaly Detection: ",
          content:
            "AI-powered analytics predict storm surges and hazardous wave patterns.",
        },
        {
          title: "Customizable Alerts: ",
          content:
            "Send alerts to stakeholders for immediate, informed response.",
        },
        {
          title: "Seamless Integration: ",
          content:
            "Works with existing offshore systems for easy data flow and analysis.",
        },
      ],
      src: "/Product-page/boats.svg", // Feature image here
    },
    {
      title: "AWI: A Data-Rich Platform for Ocean Intelligence",
      points: [
        {
          title: "Advanced Wave Insights: ",
          content:
            "Tracks wave direction, height, pressure, and flow variations in real time.",
        },
        {
          title: "Secure Cloud & Remote Uptime: ",
          content:
            "Ensures accurate ocean monitoring even in distant offshore locations.",
        },
        {
          title: "Smart Energy Optimization: ",
          content:
            "Improves efficiency for wave energy operations by enabling proactive decision-making.",
        },
      ],
      src: "/Product-page/single-boat.svg", // Feature image here
    },
    {
      title: "AWI Application: Harbour Operations",
      points: [
        {
          title: "Real-Time Harbour Data: ",
          content:
            "Provides harbor-specific sea state intelligence, improving safety and scheduling.",
        },
        {
          title: "Enhanced Operational Efficiency: ",
          content:
            "Minimizes unnecessary suspensions and optimizes vessel movements.",
        },
        {
          title: "Improved Demurrage Claim Handling: ",
          content:
            "Supports claim validation with onboard sensors, automated logging, and evidence-grade data.",
        },
      ],
      src: "/Product-page/awi-harbour.svg", // Feature image here
    },
  ],
};

const ProductRoi: Record<string, Int_roi_card_props> = {
  afas: {
    src: "/Product-page/afas_roi.svg",
    text: "By providing advanced flood forecasting, AFAS reduces disaster impact, allowing municipalities and emergency services to act swiftly, protecting lives and infrastructure and engendering confidence",
    caption:
      "Overall, this is the most user-friendly, accurate and flexible system for measuring level variations in flood events, far superior to competing systems in all its specifications.",
    title: "AFAS: Because every life counts",
  },
  "afas-pro": {
    text: `AFAS Pro enables smart water management, reducing emergency costs and protecting infrastructure. It ensures efficient resource use and monitors structural health to prevent shortages. Ideal for sustainable, proactive planning.`,
    src: "/Product-page/Ikaria.svg",
    caption: "Our bodies are 90% water Our survival depends on it ",
    title: "AFAS Pro: Because every drop is precious",
  },
  atas: {
    text: "By delivering timely tsunami alerts, ATAS minimizes casualties and infrastructure damage.\nIt enables rapid, data-driven emergency responses that save lives and reduce losses.",
    src: "/Product-page/atas_roi.svg",
    caption: "Tsunamis strike fast—ATAS gives you the time to act.",
    title: "ATAS: Every second saves lives",
  },
  "atas-pro": {
    text: `ATAS Pro provides high-precision tsunami alerts and coastal infrastructure monitoring. It empowers municipalities to act before disaster strikes, minimizing damage and saving lives.`,
    src: "/Product-page/atas_roi.svg", // Your ROI image here
    caption:
      "Tailored for high-risk zones, it offers pinpoint accuracy and smart escalation — because knowing when and where makes all the difference.",
    title: "ATAS Pro: Precision-Grade Tsunami Protection",
  },
  awi: {
    text: `AWI empowers maritime stakeholders with real-time wave intelligence to minimize downtime, enhance compliance, and streamline operations. 
It supports smarter, safer, and more profitable decision-making.`,
    src: "/Product-page/analysis.svg", // ROI image path
    caption:
      "Decode the waves. Drive smarter decisions. AWI turns ocean data into operational intelligence.",
    title: "AWI: Aqua Wave Insights System",
  },
};

interface Int_card_props {
  src: string;
  title: string;
  content: string;
  isFullHeight: boolean;
}

interface Int_points {
  title: string;
  content: string;
}

export interface Int_feature_card_props {
  src: string;
  title: string;
  points: Int_points[];
  order?: 'image-first' | 'content-first'; // Default is 'image-first'
}

interface Int_roi_card_props {
  src: string;
  caption: string;
  text: string;
  title: string;
}

function ProductDetail({ name }: { name: string }) {
  const [currentData, setCurrentData] = useState<any>();
  const [fetaureData, setFetaureData] = useState<Int_feature_card_props[]>([]);
  const [roiData, setRoiData] = useState<Int_roi_card_props>();
  const [product1, setProduct1] = useState<Int_card_props | null>(null);
  const [product2, setProduct2] = useState<Int_card_props | null>(null);
  const [product3, setProduct3] = useState<Int_card_props | null>(null);

  const xs = useMediaQuery("(max-width:800px)");

  useEffect(() => {
    setCurrentData(productCardContent[name] || null);
    setFetaureData(Productfeatures[name] || []);
    setRoiData(ProductRoi[name] || null);
  }, [name]);

  useEffect(() => {
    if (!currentData) return;

    setProduct1({
      content: currentData.content1,
      isFullHeight: false,
      src: currentData.image1,
      title: currentData.title1,
    });
    setProduct2({
      content: currentData.content2,
      isFullHeight: false,
      src: currentData.image2,
      title: currentData.title2,
    });
    setProduct3({
      content: currentData.content3,
      isFullHeight: true,
      src: currentData.image3,
      title: currentData.title3,
    });
  }, [currentData, name]);

  const ProductCard = (item: Int_card_props) => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Image
          src={item.src}
          alt=""
          width={100}
          height={100}
          style={{
            width: "100%",
            height: item.isFullHeight && !xs ? "584px" : "240px",
            objectFit: "cover",
          }}
        ></Image>

        <Box sx={{ padding: "10px", border: "1px solid #0000001A" }}>
          <SubHeader>{item.title}</SubHeader>
          <SubText
            color={"var(--text-light)"}
            sx={{
              marginTop: "12px",
              fontSize: "16px",
            }}
          >
            {item.content}
          </SubText>
        </Box>

      </Box>
    );
  };

  const ProductFeatureCard = (item: Int_feature_card_props) => {
    return (
      <Grid2 container spacing={4} marginTop={"40px"}>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Image
            src={item.src}
            alt=""
            width={100}
            height={100}
            style={{
              width: "100%",
              height: !xs ? "438px" : "280px",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          ></Image>
        </Grid2>
        <Grid2
          size={{ xs: 12, md: 6 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <SubHeader>{item.title}</SubHeader>

          <ul style={{ paddingLeft: 0, marginTop: "16px" }}>
            {item.points.map((text, index) => (
              <li
                style={{
                  position: "relative",
                  paddingLeft: "1rem",
                  marginTop: "12px",
                }}
                key={index}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 15,
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    backgroundColor: "#000", // or your theme color
                  }}
                />
                <SubText fontSize={"20px"}>
                  <span className="font-semibold">{text.title}</span>
                  {text.content}
                </SubText>
              </li>
            ))}
          </ul>
        </Grid2>
      </Grid2>
    );
  };

  const DesktopCard = (slide: Int_roi_card_props) => {
    return (
      <Box sx={{ position: "relative", width: "100%" }}>
        <Image
          width={1600}
          height={900}
          src={slide.src}
          alt={slide.caption || ""}
          className="w-full max-h-[496px] object-cover rounded-lg"
        />

        <Box
          sx={{
            position: "absolute",

            bottom: 0,
            width: "100%",

            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            borderRadius: "8px",
            color: "var(--white-color)",
            background: "rgba(0, 0, 0, 0.001)",
            padding: "20px",
            backdropFilter: "blur(1px)",
          }}
        >
          <SubText
            sx={{
              color: "var(--white-color)",
              textAlign: "center",
              fontSize: { xs: "16px", md: "20px" },
              mt: 1,
              maxWidth: "980px",
            }}
          >
            {slide.caption}
          </SubText>
          <Typography
            color="var(--highlight-color)"
            fontSize={{ xs: "16px", md: "24px" }}
            fontWeight={700}
            textAlign={"center"}
          >
            {slide.title}
          </Typography>
        </Box>
      </Box>
    );
  };

  return (
    <Box>
      {currentData && (
        <>
          <Box
            sx={{
              padding: {
                xs: "80px 10px",
                md: "80px",
              },
            }}
          >
            <AnimatedContent delay={0}>
              <MainHeader>Key BeneFits</MainHeader>
            </AnimatedContent>
            <Grid2 container spacing={2} marginTop={"20px"} display={"flex"}>
              <Grid2
                size={{
                  xs: 12,
                  md: 6,
                }}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  height: "100%",
                }}
              >
                <AnimatedContent delay={0.2}>
                  <ProductCard {...(product1 as any)} />
                </AnimatedContent>
                <AnimatedContent delay={0.4}>
                  <ProductCard {...(product2 as any)} />
                </AnimatedContent>
              </Grid2>
              <Grid2
                size={{
                  xs: 12,
                  md: 6,
                }}
                sx={{
                  display: "flex",
                }}
              >
                <AnimatedContent delay={0.6}>
                <ProductCard {...(product3 as any)} />
              </AnimatedContent>
              </Grid2>
            </Grid2>
          </Box>
        </>
      )}
      {fetaureData.length > 0 && (
        <Box
          sx={{
            padding: {
              xs: "40px 10px",
              md: "80px",
            },
            background: "var(--primary-light-color)",
          }}
        >
          {fetaureData.map((item, index) => (
            <ProductFeatureCard {...item} key={index} />
          ))}
        </Box>
      )}
      {roiData && (
        <Box
          sx={{
            padding: {
              xs: "80px 10px",
              md: "80px",
            },
            background: "var(--bg-primary-linear)",
            color: "var(--white-color)",
            display: "flex",
            flexDirection: "column",
            gap: "40px",
          }}
        >
          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <AnimatedContent delay={0}>
              <MainHeader>ROI</MainHeader>
            </AnimatedContent>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <AnimatedContent delay={0.2}>
              <SubText fontSize={"20px"}>{roiData.text}</SubText>
            </AnimatedContent>
            </Grid2>
          </Grid2>

          <AnimatedContent delay={0.4}>
            <DesktopCard {...roiData} />
          </AnimatedContent>
        </Box>
      )}
      <WhyItMattersSection />
    </Box>
  );
}

export default ProductDetail;
