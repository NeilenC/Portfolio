import React from "react";
 import { makeStyles } from "@mui/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import {
  BsGithub,
  BsLinkedin,
  BsWhatsapp,
  BsFillGeoAltFill,
  BsGearFill,
} from "react-icons/bs";
import { Box } from "@mui/material";

const useStyles = makeStyles({

  icon: {
    fontSize:"1.5rem",
    color:"grey",
    '&:hover': {
        color: "#16191e",
      },
    },

});

export default function Footer() {
 const classes = useStyles();

  return (
    <Box sx={{ position: 'fixed', bottom: 0, width: 1 }}>
    <BottomNavigation
      //  className={classes.root}
      sx={{
        width: "100%",
       backgroundColor: "#D9D9F3", 
        // backgroundColor: "rgba(0, 0, 0, 0.20)",
      }}
    >
      <BottomNavigationAction
        label="LinkedIn"
        value="linkedin"
        icon={
          <BsLinkedin
           className={classes.icon} />
        }
        href="https://www.linkedin.com/in/neilen-monlezun/"
        target="_blank"
      />
      <BottomNavigationAction
        label="GitHub"
        value="github"
        icon={
          <BsGithub
           className={classes.icon}/>
        }
        href="https://github.com/NeilenC"
        target="_blank"
      />
      <BottomNavigationAction
        label="Whatsapp"
        value="whatsapp"
        icon={
          <BsFillGeoAltFill
          className={classes.icon} />
        }
        href="https://www.google.com/maps?q=la+plata+buenos+aires+maps&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjL-p26t-j-AhUFqpUCHUNoASEQ_AUoAXoECAEQAw"
        target="_blank"
      />
    </BottomNavigation>
    </Box>

  );
}
