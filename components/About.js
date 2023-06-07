import React from "react";
import {
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Paper,
  Button,
  CardActions,
} from "@mui/material";
//import CV from "../public/CV.pdf";
import { useTheme, makeStyles } from "@mui/styles";
import Image from "next/image";
import photo from "../public/Neilen3.png";





const buttom = {

    padding: 5,
    buttom: "5rem",

  
    borderRadius: "5px",
    margin: "15px",
    "&: hover": {
      backgroundColor: "#ed6c02",
    },
    "& a": {
      color: "#fff",
      textDecoration: "none",
    },
    "& a:hover": {
      color: "#fffff"
    },

}

const About = ({ title, id, dark }) => {
  const theme = useTheme();
  const classes = useStyles();
  // a7a9a8
  return (
    <Box
      id="about"
      sx={{
      height: "100vh",
      color: "grey",
      display:"flex",
      bgcolor:"#16191e"
      }}
    >
    
      <Grid container
        sx={{
        display:"flex",
        justifyContent: "center", 
        // background: "grey" ,
        maxWidth:"90vw",
        minWidth:"90vw",
        // width:"100%",
        // minHeight:"90%",
        m:"auto",
        }}>
          <Grid item  xs={12} lg={4} sx={{display:"flex" }}>
            <Box sx={{ my:"auto"}}>

            <Image
              src={photo}
              alt="Neilen"
              width={350}
              height={700}
             
              />
              </Box>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ wordWrap: "break-word",  pt:"140px" }} >.
          <Typography sx={{fontWeight:"bold", ml:4}} variant="h4" color="#ed6c02" >
                 {title}
               </Typography>
            <Typography color="whitesmoke"  variant="body1" sx={{  fontSize:"20px",  maxWidth:"800px",  pt:"5%",  m:"auto" }}>
              
      Durante el último año y medio, he invertido la mayor parte de mi tiempo en aprender el fascinante lenguaje de JavaScript.
      Mi viaje comenzó paulatinamente pero con determinación en rumbo hacia la profesión que deseo para mi vida. <br/>
      Esto se vió aún más esclarecido cuando tomé la decisión de iniciar un Coding Bootcamp, un proceso que me ayudó
       a centrar mis bases en la materia para conseguir mi objetivo. <br/> 
      Me apasiona adquirir nuevas habilidades y disfruto de este proceso; además de éstas características, me considero una persona amable, simpática, honesta,
       y me esfuerzo por crear un ambiente positivo de trabajo en equipo donde las personas se sientan cómodas y motivadas.<br/>
      A medida que sigo avanzando en mi trayectoria en el desarrollo web, ampliando aún más mis conocimientos,
      estoy entusiasmada por trabajar en colaboración con otros profesionales en ésta industria en constante evolución.

            
            </Typography>
              
            </Grid>
      </Grid>
    </Box>
  );

};

const useStyles = makeStyles((theme) => ({
  // pdfButton: {

  //   padding: theme.spacing(2),
  //   buttom: "5rem",

  
  //   borderRadius: "5px",
  //   margin: theme.spacing(5),
  //   "&: hover": {
  //     backgroundColor: "#ed6c02",
  //   },
  //   "& a": {
  //     color: "#fff",
  //     textDecoration: "none",
  //   },
  //   "& a:hover": {
  //     color: "#fffff"
  //   },
  // },
}));

export default About;
