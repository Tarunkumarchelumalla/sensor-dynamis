
import { Typography, TypographyProps } from '@mui/material'
import React from 'react'

function MainHeader(props: TypographyProps) {
    return (
      <Typography
        {...props}
        sx={{
          fontWeight:600,
          fontSize:{
            xs:'16px',
            md:'36px'
          },
          ...props.sx, // to allow external sx to override or extend
        }}
      >
        {props.children}
      </Typography>
    )
  }

export default MainHeader
