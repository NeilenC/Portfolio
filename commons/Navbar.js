import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import CodeIcon from "@mui/icons-material/Code";
import { makeStyles } from "@material-ui/styles";
import { Link, animateScroll as scroll } from "react-scroll";
import { List, useTheme } from "@mui/material";

// const pages = ["Sobre mi", "Mis trabajos", "Contacto"];

const links = [
  { id: "about", text: "About me" },
  { id: "skills", text: "Skills" },
  { id: "work", text: "Proyectos" },
  { id: "contact", text: "Contacto" },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const classes = useStyles()
  const theme = useTheme();



  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{ backgroundColor: "rgba(0, 0, 0, 0.10)" }} position="sticky" className={classes.root}>
      <Container maxWidth="xl">
        <Toolbar className={classes.toolbar}>
          <CodeIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              color: "#ffa424",
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "BlinkMacSystemFont",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "#f5f5f5",
              textDecoration: "none",
            }}
          >
            Neilen Monlezun
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="warning"
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
              sx={{
                display: { xs: "block", md: "none" }, p:"2%"
              }}
            >
              <List className={classes.menu}>
                {links.map(({ id, text }, index) => (
                  <Link
                    key={index}
                    to={id}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    <Typography>{text}</Typography>
                  </Link>
                ))}
              </List>
            </Menu>
          </Box>
          <CodeIcon
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
              color: "#f5f5f5",
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "BlinkMacSystemFont",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "#f5f5f5",
              textDecoration: "none",
            }}
          >
            Portfolio
          </Typography>
          {/* <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}> */}
            <List className = { classes.menu}>
              {links.map(({ id, text }, index) => (
                <Link
                  key={index}
                  to={id}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                >
                  <Typography>{text}</Typography>
                </Link>
              ))}
            </List>
          {/* </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

const useStyles = makeStyles((theme) => ({
  // root: {
  //   background: "#fafafa",
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   zIndex: 999,
  // },
  toolbar: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  menu: {
    "& a": {
      color: "#333",
      fontSize: "1.4rem",
      fontWeight: "bold",
    },
    "& a:hover": {
      cursor: "pointer",
      color: "tomato",
      borderBottom: "3px solid tomato",
    },
  }
}));

export default Navbar;
