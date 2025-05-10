import MainHeader from "@/components/common/Typography/main-header";
import SubText from "@/components/common/Typography/sub-text";
import { Box, Tab } from "@mui/material";
import Image from "next/image";



export default async function ProductPage({ params }: any) {
  const { name } = params;

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
            flexDirection:'column',
            justifyContent: "center",
            alignItems: "center",
            color:'var(--white-color)',
            maxWidth:'1280px'
          }}
        >
          <MainHeader>Advanced Flood Alert System (AFAS)</MainHeader>
          <SubText sx={{textAlign:'center'}} >{`The Advanced Flood Alert System (AFAS) provides localized real-time alerts 24/7, ensuring communities are prepared and protected. Designed to monitor river levels, dry riverbeds, and glacier lakes, AFAS enables authorities to detect early signs of potential flooding before disaster strikes.`}</SubText>
        </Box>
      </Box>
        
    </Box>
  );
}
