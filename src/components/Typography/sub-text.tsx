import React from 'react'
import { Box, BoxProps } from '@mui/material'

function SubText(props: BoxProps) {
  return (
    <Box
      {...props}
      sx={{
        ...props.sx, // to allow external sx to override or extend
        fontFamily: 'Roboto !important',
      }}
    >
      {props.children}
    </Box>
  )
}

export default SubText
