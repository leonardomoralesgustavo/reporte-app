import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NextLink from "next/link";

interface IPages {
  title: string;
  icon?: any;
  route: string;
  action?: () => void;
}

const pages: IPages[] = [
  {
    title: "Home",
    route: "/",
    icon: "/Images/home.png",
  },
  {
    title: "Salir",
    route: "/",
    icon: "/Images/exit.png",
    action: () => {
      location.reload();
    },
  },
];

export const TopBar = () => {
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handlePageClick = (route: string, action?: () => void) => {
    handleCloseNavMenu();
    if (action) {
      action();
    }
    router.push(route);
  };

  return (
    <AppBar
      position="relative"
      style={{ borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}
      sx={{
        // mb: 10,
        bgcolor: "white",
        boxShadow: "none", // Asegura que no haya sombra
        borderBottom: "2px solid", // A
      }}
    >
      <Toolbar disableGutters sx={{ mx: 4, my: 2 }}>
        {/* topbar desktop */}
        <Box
          component={"img"}
          src="./Images/logo-chevrolet.png"
          width={"100px"}
          height={"auto"}
          sx={{
            display: { xs: "none", md: "flex" },
            my: 2,
            ml: 2,
            cursor: "pointer",
          }}
          onClick={() => router.push("/")}
        />
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "space-around",
          }}
        >
          {pages.map(({ title, icon, route, action }) => (
            <NextLink
              key={route}
              href={route}
              passHref
              style={{ textDecoration: "none" }}
            >
              <Box
                display={"flex"}
                component={"div"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                minWidth={"150px"}
                minHeight={"70px"}
                mt={1}
                onClick={() => handlePageClick(route, action)}
              >
                <Box
                  component={"img"}
                  width={"50px"}
                  height={"20%"}
                  src={`${icon}`}
                />
                <Button
                  key={title}
                  sx={{
                    display: "block",
                    fontSize: "12px",
                    color: router.pathname == route ? "black" : "#004A7C",
                    fontWeight: router.pathname == route ? "900" : "700",
                  }}
                >
                  {title}
                </Button>
              </Box>
            </NextLink>
          ))}
        </Box>
        {/* topbar desktop */}
        {/* topbar mobile */}
        <Box
          component={"img"}
          src="./Images/logo-chevrolet.png"
          width={"40px"}
          height={"40px"}
          sx={{
            display: { xs: "flex", md: "none" },
            my: 3,
            mr: 1,
            cursor: "pointer",
          }}
          onClick={() => router.push("/")}
        />
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", md: "none" },
            justifyContent: "flex-end",
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon sx={{ color: "#004A7C" }} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map(({ title, route, action }, index) => (
              <NextLink
                key={route}
                href={route}
                passHref
                style={{ textDecoration: "none" }}
              >
                <MenuItem
                  key={index}
                  onClick={() => {
                    handleCloseNavMenu(), handlePageClick(route, action);
                  }}
                >
                  <Typography
                    variant="h6"
                    textAlign="center"
                    sx={{
                      px: 1,
                      textAlign: "left",
                      width: "100%",
                      color: router.pathname == route ? "white" : "#004A7C",
                      bgcolor:
                        router.pathname == route ? "#004A7C" : "transparent",
                    }}
                  >
                    {title}
                  </Typography>
                </MenuItem>
              </NextLink>
            ))}
          </Menu>
        </Box>
        {/* topbar mobile */}
      </Toolbar>
    </AppBar>
  );
};
