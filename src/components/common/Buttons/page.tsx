'use client';

import { useRouter } from 'next/navigation';
import Button from '@mui/material/Button';
import React from 'react';

interface BtnProps {
  route?: string;
  onClick?: () => void;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  children: React.ReactNode;
  sx?: any;
}

const CustomButton: React.FC<BtnProps> = ({ route, onClick, startIcon, endIcon, children, sx }) => {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) onClick();
    if (route) router.push(route);
  };

  return (
    <Button
      onClick={handleClick}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={{
        fontSize: {
          xs: '12px',
          md: '16px',
        },
        fontWeight: 700,
        background: 'var(--white-color)',
        borderRadius: '8px',
        padding: '8px 16px',
        ...sx,
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
