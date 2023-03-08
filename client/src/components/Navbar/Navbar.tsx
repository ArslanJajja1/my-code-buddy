import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import {
  AppBar,
  Container,
  Toolbar,
  Box,
  IconButton,
  Typography,
  Menu,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";
import PsychologyIcon from "@mui/icons-material/Psychology";
import MenuIcon from "@mui/icons-material/Menu";
import avatarImage from "../../assets/images/arslan.jpg";
import { Link } from "react-scroll";
import { useScrollspy } from "../../hooks/useScrollSpy";

const pages = ["How It Works", "Usecases", "Features", "Pricing", "Reviews"];
const ids = ["howitworks","usecases","features","pricing","reviews"]
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [activeClass, setActiveClass] = useState<null | string>(null);
  const activeId:string = useScrollspy(ids)
  useEffect(()=>{
    setActiveClass(activeId)
  },[activeId])
  const classes = useStyles();
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = (
    event: React.MouseEvent<HTMLElement | HTMLButtonElement>
  ) => {
    setAnchorElNav(null);

    // add active class functionality

    let sectionId: string | null = (event.currentTarget as HTMLButtonElement)
      .name;
    if (!sectionId) {
      sectionId = (event.currentTarget as HTMLButtonElement).getAttribute(
        "data-name"
      );
    }
    setActiveClass(sectionId);
  };
  const handleCloseUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(null);
  };

  return (
     
    <AppBar position="fixed" elevation={0} className={classes.container}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <PsychologyIcon
            color="primary"
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          
          <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>
            <Typography
              variant="h6"
              noWrap
              color="primary.main"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                letterSpacing: "2px",
                cursor: "pointer",
              }}
              onClick={() => setActiveClass(null)}
            >
              CodeBuddy
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="Nav items"
              aria-controls="menu-appbar"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <Link
                  to={page.toLowerCase().replace(/\s+/g, "")}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                  key={page}
                >
                  <MenuItem
                    onClick={handleCloseNavMenu}
                    className={`${
                      activeClass ==
                        page.toLocaleLowerCase().replace(/\s+/g, "") &&
                      classes.activeNavItemMobile
                    }`}
                    data-name={page.toLowerCase().replace(/\s+/g, "")}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <PsychologyIcon
            color="primary"
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="body2"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: "2px",
              color: "primary.main",
              cursor: "pointer",
            }}
            onClick={() => setActiveClass(null)}
          >
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              CodeBuddy
            </Link>
          </Typography>
          <Box
            sx={{ display: { xs: "none", md: "flex" }, mx: "auto", px: "1rem" }}
          >
            {pages.map((page) => (
              <Link
                to={page.toLowerCase().replace(/\s+/g, "")}
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                key={page}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "inherit",
                    display: "block",
                    letterSpacing: "2px",
                    fontWeight: "600",
                    mx: "5px",
                  }}
                  className={`${
                    activeClass ==
                      page.toLocaleLowerCase().replace(/\s+/g, "")
                      &&
                    classes.activeNavItem
                  }`}
                  name={page.toLowerCase().replace(/\s+/g, "")}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open Settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
                aria-label="User profile menu"
                aria-controls="menu-userbar"
              >
                <Avatar alt="Arslan" src={avatarImage} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-userbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
