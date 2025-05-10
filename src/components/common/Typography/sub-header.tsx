
import { Typography, TypographyProps } from '@mui/material'
import React from 'react'

function SubHeader(props: TypographyProps) {
    return (
      <Typography
        {...props}
        sx={{
          fontWeight:600,
          fontSize:{
            xs:'14px',
            md:'24px'
          },
          ...props.sx, // to allow external sx to override or extend
        }}
      >
        {props.children}
      </Typography>
    )
  }

export default SubHeader
