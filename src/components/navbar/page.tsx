"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const productsData = [
  {
    title: "AFAS",
    link: "/products/afas",
    subText: "Learn about your users",
    icon: "/blue-afas.svg",
  },
  {
    title: "AFAS(pro)",
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
    title: "ATAS(pro)",
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
  const [mobileAnchor, setmobileAnchor] = React.useState<null | HTMLElement>(
    null
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    React.useState<boolean>(false);
  const [mobileProductsOpen, setMobileProductsOpen] =
    React.useState<boolean>(false);

  const open = Boolean(anchorEl);
  const mobileOpen = Boolean(mobileAnchor);

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

  const handleMobileMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setmobileAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (link: string) => {
    router.push(link);
    setmobileAnchor(null)
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
        padding: {
          xs: "10px",
          md: "0px 120px",
        },
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

      {/* Mobile Menu Icon */}
      <IconButton
        onClick={(event)=>mobileAnchor ? setmobileAnchor(null) : handleMobileMenu(event)}
        sx={{
          display: { xs: "flex", md: "none" },
          height: "44px",
          width: "44px",
        }}
      >
        <Image
          src={mobileAnchor ? "/close.svg" : "/burger-menu.svg"}
          alt="menu-toggle"
          width={20}
          height={20}
          style={{
            objectFit: "contain",
            cursor: "pointer",
            zIndex:1000000
          }}
        />
      </IconButton>

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
        onClose={() => setAnchorEl(null)}
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
                backgroundColor: isSelected
                  ? "var(--highlight-color)"
                  : "white",
                borderRadius: "12px",
                margin: "4px",
                "&:hover": {},
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
                  <Typography sx={{ color: "var(--text-light)" }}>
                    {item.subText}
                  </Typography>
                </Box>
              </Box>
            </MenuItem>
          );
        })}
      </Menu>

      <Menu
        anchorEl={mobileAnchor}
        open={mobileOpen}
        onClose={() => setmobileAnchor(null)}
        PaperProps={{
          sx: {
            width: "100vw",
            mt: 8,
            p: 2,
            borderRadius: "12px",
            boxShadow: "0px -4px 20px rgba(0,0,0,0.15)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          },
        }}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        {/* Products Accordion */}
        <Accordion
          expanded={mobileProductsOpen}
          onChange={() => setMobileProductsOpen(!mobileProductsOpen)}
          disableGutters
          elevation={0} // removes shadow
          square // optional: removes border-radius in some themes
          sx={{
            mt: 1.5,
            borderRadius: "16px",
            boxShadow: "none", // explicitly remove box shadow
            border: "none", // explicitly remove border
            "&::before": {
              display: "none", // removes the default top divider line
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              boxShadow: "none",
              border: "none",
              minHeight: 0,
              "&.Mui-expanded": {
                minHeight: 0,
              },
            }}
          >
            <Typography sx={{ fontSize: "16px" }}>Products</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              boxShadow: "none",
              border: "none",
              ml: "3px",
            }}
          >
            {productsData.map((item) => {
              const isSelected = pathname === item.link;
              return (
                <Box
                  key={item.link}
                  onClick={() => handleNavigation(item.link)}
                  sx={{
                    backgroundColor: isSelected
                      ? "var(--primary-light-color)"
                      : "white",
                    borderRadius: "12px",
                    margin: "4px 0",
                    p: 1,
                    cursor: "pointer",
                  }}
                >
                  <Box
                    sx={{ display: "flex", gap: "12px", alignItems: "center" }}
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={24}
                      height={24}
                    />
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontWeight: isSelected ? "800" : "700",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography sx={{ color: "var(--text-light)" }}>
                        {item.subText}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </AccordionDetails>
        </Accordion>

        {/* Other Menu Items */}
        {pages
          .filter((page) => page.name !== "Products")
          .map((page) => (
            <MenuItem
              key={page.name}
              onClick={() => handleNavigation(page.link)}
              sx={{ mt: 1 }}
            >
              {page.name}
            </MenuItem>
          ))}
      </Menu>
    </Toolbar>
  );
}

export default ResponsiveAppBar;
