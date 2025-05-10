"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Menu, MenuItem, Typography } from "@mui/material";

const productsData = [
  {
    title: "AFAS",
    link: "/products/afas",
    subText: "Learn about your users",
    icon: "/blue-afas.svg",
  },
  {
    title: "AFAS(PRO)",
    link: "/products/afas-pro",
    subText: "Monitor your metrics",
    icon: "/blue-afas.svg",
  },
  {
    title: "ATAS",
    link: "/products/atas",
    subText: "Monitor your metrics",
    icon: "/blue-atas.svg",
  },
  {
    title: "ATAS (PRO)",
    link: "/products/atas-pro",
    subText: "Monitor your metrics",
    icon: "/blue-atas.svg",
  },
  {
    title: "AWI",
    link: "/products/awi",
    subText: "Monitor your metrics",
    icon: "/blue-awi.svg",
  },
];

function ResponsiveAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const router = useRouter();
  const pathname = usePathname();

  const pages = [
    {
      name: "Products",
      link: "/products",
      icon: "/down-arrow.svg",
      onClick: (event: React.MouseEvent<HTMLButtonElement>) =>
        handleClick(event),
    },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Blog", link: "/blog" },
  ];

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (link: string) => {
    router.push(link);
  };

  const handleRoute = (link: string) => {
    handleClose();
    router.push(link);
  };

  return (
    <Toolbar
      disableGutters
      sx={{
        height: "80px",
        padding: "0px 120px",
        width: "100%",
        justifyContent: "space-between",
        backgroundColor: "transparent",
      }}
    >
      <Image
        src="/home/main-logo.svg"
        alt="sendorDynamis"
        width={166}
        height={72}
        onClick={() => handleNavigation("/")}
        style={{ objectFit: "contain", cursor: "pointer" }}
      />

      {/* Desktop Menu */}
      <Box sx={{ display: { xs: "none", md: "flex" }, gap: "25px" }}>
        {pages.map((page) => {
          const isActive =
            page.name === "Products"
              ? pathname.startsWith("/products")
              : pathname === page.link;

          return (
            <Button
              key={page.name}
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={(event) =>
                page.onClick
                  ? page.onClick(event as any)
                  : handleNavigation(page.link)
              }
              sx={{
                paddingBottom: "10px",
                color: isActive ? "var(--primary-color)" : "var(--dark-color)",
                textTransform: "none",
                fontSize: "16px",
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  height: "4px",
                  width: isActive ? "100%" : "0%",
                  backgroundColor: "var(--highlight-color)",
                  transition: "width 0.3s ease",
                },
                "&:hover::after": {
                  width: "100%",
                },
              }}
              endIcon={
                page.icon && (
                  <Box sx={{ ml: "2px" }}>
                    <Image src={page.icon} alt="" width={12} height={6} />
                  </Box>
                )
              }
            >
              {page.name}
            </Button>
          );
        })}
      </Box>

      {/* Dropdown Menu */}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableScrollLock={true}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        PaperProps={{
          sx: {
            maxWidth: "278px",
            mt: 1.5,
            borderRadius: "16px",
            boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: "24px",
              width: 12,
              height: 12,
              backgroundColor: "white",
              transform: "translateY(-50%) rotate(45deg)",
              boxShadow: "-1px -1px 1px rgba(0,0,0,0.05)",
            },
          },
        }}
      >
        {productsData.map((item, index) => {
          const isSelected = pathname === item.link;

          return (
            <MenuItem
              key={index}
              onClick={() => handleRoute(item.link)}
              selected={isSelected}
              sx={{
                backgroundColor: isSelected ? "var(--highlight-color)" : "white",
                borderRadius: "12px",
                margin: "4px",
                "&:hover": {
                 
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "12px",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <Image src={item.icon} alt={""} width={24} height={24} />
                <Box>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: isSelected ? "800" : "700",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{ color: "var(--text-light)" }}
                  >
                    {item.subText}
                  </Typography>
                </Box>
              </Box>
            </MenuItem>
          );
        })}
      </Menu>
    </Toolbar>
  );
}

export default ResponsiveAppBar;
