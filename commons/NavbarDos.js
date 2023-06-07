import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  fabClasses,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Link, animateScroll as scroll } from "react-scroll";
import CodeIcon from "@mui/icons-material/Code";
import MenuIcon from "@mui/icons-material/Menu";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import CancelIcon from "@mui/icons-material/Cancel";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import { useTheme, makeStyles } from "@mui/styles";

const NavbarDos = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [open, setOpen] = useState(false);

  const links = [
    {id:"intro", text:"Home", icon : <HomeOutlinedIcon/>},
    { id: "about", text: "Sobre mi", icon: <InfoOutlinedIcon /> },
    {
      id: "skills",
      text: "Skills",
      icon: <BoltOutlinedIcon className={classes.light} />,
    },
    { id: "work", text: "Proyectos", icon: <BuildOutlinedIcon /> },
    { id: "contact", text: "Contacto", icon: <ContactPageOutlinedIcon /> },
  ];

  return (
    <Box >
      <AppBar
        position="fixed"
        sx={{ 
          backgroundColor: "rgba(0, 0, 0, 0.20)",
         }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          {/* <CodeIcon
            sx={{
              display: { xs: "none", md: "flex"},
              mr: 1,
              color: "#ffa424",
            }}
          /> */}
         
          <List
           
            sx={{
              [theme.breakpoints.down("sm")]: { display: "none" },
              color: "#fafafa",
              fontSize: "1.8rem",
              fontFamily: "Arial",
              fontWeight:"bold",
              
            }}
          >
            {links.map(({ id, text }, index) => {
              return (

                <Box component={'span'}  key={index} 
                sx={{
                  ml: 5, 
                  marginLeft: theme.spacing(3),
                  marginRight: 7,
                  
                  "&:hover": {
                    cursor: "pointer",
                    color: "#ed6c02",
                    borderBottom: "2px solid #ed6c02",
                  }, }}>

                <Link
                  to={id}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={0}
                  activeClass="active"
        
                  >
                  {text}
                </Link>
                  </Box>
              );
            })}
          </List>
          {
            isMobile ?
          <IconButton
            edge="end"
            sx={{
            [theme.breakpoints.down("sm")]: {
              color: "#957DAD",
              position: "absolute",
              top: 0,
              right: 10,
            },}}
            onClick={() => setOpen(!open)}
          >
            <MenuIcon fontSize="large" />
          </IconButton> : null
          }
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <IconButton
          sx={{
            color: "#957DAD",
            position: "absolute",
            top: 4,
            right: 10,
          }}
          onClick={() => setOpen(false)}
        >
          <CancelIcon
          sx={{
             color: "#ed6c02",
             position: "absolute",
             top: 5,
             right: 10,
       
            }} 
          />
        </IconButton>
        <Divider sx={{ pt: "50px" }} />
        {links.map(({ id, text, icon }, index) => (
          <Link
            key={index}
            to={id}
            spy={true}
            smooth={true}
            duration={500}
            offset={0}
            activeClass="active"
            style={{
              fontFamily: "Arial",
              fontSize:10,
              width: "35vh",
              [theme.breakpoints.down("sm")]: {
                width: "60vh",
              },
            }}
          >
            <ListItem
              component="h5"
              sx={{
                margin: theme.spacing(5, 0, 0, 1),
                fontSize: "1rem",
                color: "#333",
                fontWeight: "bold",
                "&:hover": {
                  color: "#ed6c02",
                  cursor: "pointer",
                },
              }}
            >
              <span>
                <ListItemIcon>{icon}</ListItemIcon>
              </span>
              {text}
            </ListItem>
          </Link>
        ))}
      </Drawer>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  // root: {
  //   backgroundColor: theme.palette.background.paper,
  // minuto 1:35:43 },
  // toolbar: {
  //   display: "flex",
  //   justifyContent: "flex-start",
  //   alignItems: "center",
  // },
  // menu: {
  //   //En tamaño "small" desaparezca el menu
  //   [theme.breakpoints.down("sm")]: { display: "none" },
  //   "& a": {
  //     color: "#fafafa",
  //     fontSize: "1.1rem",
  //     fontFamily: "Arial",
  //     marginLeft: theme.spacing(3),
  //     marginRight: "0%",
  //   },
  //   "& a:hover": {
  //     cursor: "pointer",
  //     color: "#957DAD",
  //     borderBottom: "2px solid #957DAD",
  //   },
  // },
  // menuButton: {
  //   display: "none",
  //   [theme.breakpoints.down("sm")]: {
  //     display: "block",
  //     color: "#957DAD",
  //     position: "absolute",
  //     top: 0,
  //     right: 10,
  //   },
  // },
  // cancelIcon: {
  //   color: "#957DAD",
  //   position: "absolute",
  //   top: 4,
  //   right: 10,
  // },

  // sidebar: {
  //   fontFamily:"Arial",
  //   width: "45vh",
  //   [theme.breakpoints.down("sm")]: {
  //     width: "40vh",
  //   },
  //   "& h5": {
  //     margin: theme.spacing(5, 0, 0, 1),
  //     fontSize: "1rem",
  //     color: "#333",
  //     fontWeight: "bold",
  //   },
  //   "& h5:hover": {
  //     color: "#957DAD",
  //     cursor: "pointer",
  //   },
  // },
  light: {
    color: "#ffcc00",
  },
}));

export default NavbarDos;
