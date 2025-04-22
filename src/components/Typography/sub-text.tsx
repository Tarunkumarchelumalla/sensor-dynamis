import React from 'react'
import { Box, BoxProps } from '@mui/material'

interface SubTextProps extends BoxProps {}

function SubText(props: SubTextProps) {
  return (
<Box
  {...props}
  sx={{
    fontFamily: 'Roboto !important',
  }}
>
  {props.children}
</Box>
  )
}

export default SubText
