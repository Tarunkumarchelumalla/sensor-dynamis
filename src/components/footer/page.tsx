"use client";

import {
  Box,
  Button,
  Divider,
  Grid2,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";

import { useRouter } from "next/navigation";
import SubText from "../common/Typography/sub-text";


const Applications = [
  "Advanced Flood Alert System - AFAS & AFAS Pro",
  "Aqua-Wave Intelligence System - AWI",
  "Advanced Tsunami Alert System - ATAS and ATAS Pro",
];

const QuickLinks =['About','Contact Us','Blog']

export default function Footer() {
  const router = useRouter();

  const handleNavigation = (link: string) => {
    router.push(link);
  };
  return (
    <Box sx={{  background: "var(--bg-primary-linear)",
      minHeight: "450px",
      width: "100%",
      color: "var(--white-color)",}} padding={{xs:'24px',md:'80px'}}>
      <Grid container spacing={2} display={'flex'} flexDirection={{xs:'column',md:'row'}} justifyContent={{md:'space-between'}}>
        <Grid
          size={{ xs: 12, md: 4.5 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "start",
            gap: "16px",
          }}
        >
          <Image
            src={"/footer/footer-logo.svg"}
            alt={""}
            width={139}
            height={31}
          ></Image>
          <Box marginTop={{xs:"32px",md:"24px"}}>
            <SubText fontSize={'16px'} fontWeight={400}>
              Providing cutting-edge solutions for real-time monitoring and
              optimization across industries.
            </SubText>
          </Box>
          <SubText fontSize={"14px"} marginTop={{xs:'32px',md:'0px'}}>Get in touch</SubText>
          <Grid2
          container
          spacing={4}
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
            marginTop={{xs:"16px",md:'0px'}}
          >
            <Grid2 size={{xs:12,md:7}}>

            <TextField
              variant="outlined"
              placeholder="Enter your Email"
              sx={{
                backgroundColor: "var(--white-color)",
                borderRadius: "8px",
                   width:'100%',
                "& .MuiOutlinedInput-root": {
                  height: "44px",
                  border: "1px solid #D5D7DA",
                },
              }}
            />
            </Grid2>
            <Grid2 size={{xs:12,md:5}}>
            <Button
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                background: "var(--primary-color)",
                borderRadius: "8px",
                padding: "8px 16px",
                textTransform: "none",
                width:'100%'
              }}
            >
              <span className="text-[var(--white-color)] ">Contact Us</span>
            </Button>
              </Grid2>              
          </Grid2>
        </Grid>
        <Grid
          size={{ xs: 12, md: 4.5 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "start",
            gap: "16px",
          }}
        >
               <SubText fontSize={'14px'} fontWeight={600}  sx={{cursor:'pointer'}}>
              Applications
            </SubText>

          {Applications.map((el, index) => (
            <SubText fontSize={'14px'} fontWeight={400}  key={index}>
              {el}
            </SubText>
          ))}
        </Grid>
        <Grid      size={{ xs: 12, md: 3 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "start",
            gap: "16px",
          }}
        >
             <SubText fontSize={'14px'} fontWeight={600}  sx={{cursor:'pointer'}}>
              Quick Links
            </SubText>

          {QuickLinks.map((el, index) => (
            <SubText fontSize={'14px'} fontWeight={400} key={index} sx={{cursor:'pointer'}}>
              {el}
            </SubText>
          ))}
        </Grid>
      </Grid>

      <Divider
        sx={{
          color: "var(--white-color)",
          background: "var(--white-color)",
          marginTop: "40px",
        }}
      ></Divider>

      <Box marginTop={'32px'} sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'100%'}}>

        <SubText fontWeight={400}>© Sensor Dynamis. All rights reserved.</SubText>
        <SubText fontWeight={400}>Terms & Conditions <span>Privacy Policy</span></SubText>

      </Box>

    </Box>
  );
}
