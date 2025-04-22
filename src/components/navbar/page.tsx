"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Menu, MenuItem } from "@mui/material";

const pagesWithLinks = ["Products", "About", "Contact", "Blog"];

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
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
              key={page.name}
              component="a"
              onClick={(event) =>
                page.onClick
                  ? page.onClick(event as any)
                  : handleNavigation(page.link)
              }
              sx={{
                padding: "0px",
                color: isActive ? "var(--primary-color)" : "var(--dark-color)",
                display: "flex", // changed from block to flex for better alignment
                alignItems: "center", // vertical alignment
                gap: "4px", // space between text and icon
                textTransform: "none",
                fontSize: "16px",
                position: "relative",
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
      >
        <MenuItem onClick={handleClose}>AFAS</MenuItem>
        <MenuItem onClick={handleClose}>AFAS(PRO)</MenuItem>
        <MenuItem onClick={handleClose}>ATAS</MenuItem>
        <MenuItem onClick={handleClose}>ATAS(PRO)</MenuItem>
        <MenuItem onClick={handleClose}>AWI</MenuItem>
      </Menu>
    </Toolbar>
  );
}

export default ResponsiveAppBar;
