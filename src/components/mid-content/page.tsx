import { Box, Grid2, Typography } from '@mui/material'
import React from 'react'
import SubText from '../Typography/sub-text'

interface Int_content{
  imageUrl:string,
 title:string,
 legend:string,
 subtext:string,
 order1:number
 order2:number
}


function MidContent() {

  const content:Int_content[]=[
    {
    imageUrl: '/mid-content/efficient.svg',
    title: 'Efficient Operations',
    legend: 'Accurate Forecasting, smarter decisions- everyone wins',
    subtext: 'Utilise advanced analytics to accurately forecast events and optimize response strategies. Improve preparedness, resource allocation and operational efficiency.',
    order1: 1,
    order2: 2
  },
  {
    imageUrl: '/mid-content/enhance.svg ',
    title: 'Enhanced Safety',
    legend: 'Real-time insights, Instant action',
    subtext: 'Quickly detect and respond to environmental threats with pinpoint accuracy. Our systems provide instant alerts when anomalies are detected as well as predictive analytics, safeguarding your community and resources as well as optimizing operations and monitoring infrastructure integrity.',
    order1: 4,
    order2: 3
  },
  {
  imageUrl: '/mid-content/betteroutcomes.svg',
  title: 'Better Outcomes',
  legend: 'Everyone Wins',
  subtext: 'Unleash the Power of Prediction! Transform Uncertainty into Opportunity with Bold, Data-Driven Innovation, This is more than tech - it’s movement and you’re leading it',
  order1: 5,
  order2: 6
},
]

  return (
    
    <Box sx={{
        background:'var(--White-color)',
    }}   padding={{
        xs: "24px 10px",
        md: "80px",
      }}>
        <Typography textAlign={{xs:'left',md:'center'}} fontSize={{xs:'24px',md:'36px'}} fontWeight={600}>Communities and businesses rely on data-driven water solutions that put them first.</Typography>


        <Grid2 container spacing={2} sx={{marginTop:'40px'}}>

      { content.map((item,index)=>(
          <>
            <Grid2 order={{md:item.order1}} size={{xs:12,md:6}} sx={{
                backgroundImage:`url(${item.imageUrl})`,
                position: "relative",
                width: "100%",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                padding: "40px",
                borderRadius: "16px",
                
            }}
            minHeight={{xs:'218px',md:'438px'}}
                        >

            </Grid2>
            <Grid2 order={{md:item.order2}} size={{xs:12,md:6}} sx={{
              display:'flex',
              justifyContent:'center',
              alignItems:'start',
              gap:'12px',
              flexDirection:'column'
            }}>

            <Box sx={{
              borderRadius: '16px',
                padding:'4px 12px',
                border: '1px solid var(--light-pink)',
                background:'var(--secondary-color)',
            }}>
              <Typography fontSize={{xs:'12px',md:'14px'}} fontWeight={600} color='var(--primary-color)'>

              {item.title}
              </Typography>
            </Box>
            
            <Typography fontSize={{xs:'16px',md:'28px'}} fontWeight={600}>{item.legend}</Typography>
            
            <SubText fontWeight={400}  fontSize={{xs:'12px',md:'20px'}}>{item.subtext}</SubText>

            </Grid2></>))
}
        </Grid2>

  

    </Box>

  )
}

export default MidContent
