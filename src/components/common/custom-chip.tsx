import { Box, BoxProps, Typography } from '@mui/material';
import React from 'react';

interface ChipProps extends BoxProps {
  title: string;
 color:string;
}

const Chip: React.FC<ChipProps> = ({ title,color="var(--primary-color)"}) => {
  return (
    <Box
      sx={{
        borderRadius: '16px',
        padding: '4px 12px',
        border: '1px solid var(--light-pink)',
        background: 'var(--secondary-color)',
        display: 'inline-flex',
        alignItems: 'center',

      }}

    >
      <Typography
        fontSize={{ xs: '12px', md: '14px' }}
        fontWeight={600}
        color={color}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Chip;
