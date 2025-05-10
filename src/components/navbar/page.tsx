"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Menu, MenuItem, Typography } from "@mui/material";


const pagesWithLinks = ["Products", "About", "Contact", "Blog"];

const productsData = [
  {
    title: "AFAS",
    link: "/products/afas",
    subText: "Learn about your users",
    icon: "/blue-afas.svg",
  },
  {
    title: "AFAS(PRO)",
    link: "/products/afas",
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
    link: "/products/afas",
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
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

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

  const router = useRouter();
  const pathname = usePathname();

  const handleMenuItemClick = (link: string) => {
    router.push(link);
    setIsMenuOpen(false);
  };

  const handleOpenNavMenu = () => {
    setIsMenuOpen(true);
  };

  const handleNavigation = (link: string) => {
    router.push(link);
  };

  const handleRoute= (link:string)=>{
    handleClose()
    router.push(link)
  }

  return (
    <Toolbar
      disableGutters
      sx={{
        height: "80px",
        display: "flex",
        padding: "0px 120px",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
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

      {/* Desktop menu */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          gap: "25px",
        }}
      >
        {pages.map((page) => {
          const isActive = pathname === page.link;

          return (
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              key={page.name}
              component="a"
              onClick={(event) =>
                page.onClick
                  ? page.onClick(event as any)
                  : handleNavigation(page.link)
              }
              sx={{
                paddingBottom: "10px ",
                color: isActive ? "var(--primary-color)" : "var(--dark-color)",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                textTransform: "none",
                fontSize: "16px",
                position: "relative",
                overflow: "hidden", // Needed for the after element
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  height: "4px",
                  width: "0%",
                  backgroundColor: "var(--highlight-color)",
                  transition: "width 0.3s ease",
                },
                "&:hover::after": {
                  width: "100%",
                },
              }}
              endIcon={
                page.icon ? (
                  <Box
                    component="span"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "2px",
                    }}
                  >
                    <Image
                      src={page.icon || ""}
                      alt=""
                      width={12}
                      height={6}
                      style={{ display: "block" }}
                    />
                  </Box>
                ) : (
                  <></>
                )
              }
            >
              {page.name}
            </Button>
          );
        })}
      </Box>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableScrollLock={true}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        container={
          typeof window !== "undefined" ? () => window.document.body : undefined
        }
        PaperProps={{
          sx: {
            maxWidth: "278px",
            overflow: "visible",
            mt: 1.5, // margin top to fit the arrow
            boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: "24px", // Adjust based on your design
              width: 12,
              height: 12,
              backgroundColor: "white", // Menu background color
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
              boxShadow: "-1px -1px 1px rgba(0,0,0,0.05)",
            },
            borderRadius: "16px", // Rounded corners for menu
          },
        }}
      >
        {productsData.map((item, index) => (
          <MenuItem onClick={()=>handleRoute(item.link)} key={index}>
            <Box
              sx={{
                display: "flex",
                gap: "12px",
                width: "100%",
                alignItems: "center",
              }}
            >
              <Image src={item.icon} alt={""} width={24} height={24}></Image>
              <Box>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "700",
                  }}
                >
                  {" "}
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    color: "var(--text-light)",
                  }}
                >
                  {item.subText}
                </Typography>
              </Box>
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </Toolbar>
  );
}

export default ResponsiveAppBar;
