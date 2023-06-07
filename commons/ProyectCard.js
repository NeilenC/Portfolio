import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTheme, makeStyles } from "@mui/styles";
import { Box, Grid } from "@mui/material";
import gambet from "../public/gambet.png"
 import { BsGithub } from "react-icons/bs";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";



const proyectos = [
  { linkGit: "https://github.com/NeilenC/Tunecommerce-backend",  duración: "2 semanas",
    nombre: "Tune-commerce",
    descripcion:
      "Entre 6 desarrolladores realizamos un e-commerce, en nuestro caso de intrumentos musicales.", img: null , alt:"tune"
  },
  {linkGit: "https://github.com/NeilenC/Tonic3Prode-Front",  duración: "4 semanas",nombre: "Gambet", descripcion: "Tuvimos el desafío de crear un prode en el cual se puedan cargar torneos resultados y predicciones de usuario. ", img: gambet , alt:"gambet"},
  {linkGit: "https://github.com/NeilenC/26-checkpoint-TMDB/tree/main",  duración: "5 días",nombre: "TMDB", descripcion: "En este proyecto en solitario pude crear una aplicación para buscar películas, consumiento de una API externa." , img: null},
];

const gridStyle = {
  display: "flex",
  zIndex: 100,
  pt:0.8,
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: "5px",
  boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
  bgcolor:"lightgrey",
  ml:6,
  "&:hover":{
    '-webkit-transform': 'scale(1)',
    'transform': 'scale(1.1)',
  },

  "& .MuiTypography-body1": {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    lineClamp: 2, // Número de líneas que deseas mostrar antes de truncar el texto
    maxHeight: "5rem",
    maxWidth:"20rem",
  
  },
};

const containerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",

};


  const useStyles = makeStyles({

    icon: {
      fontSize:"2.5rem",
      color:"inherit",
      
      '&:hover': {
          color: "#16191e",
        },
      },
  
  });

export default function ProyectCard() {
  const classes = useStyles();
  const theme = useTheme();


  return (
  
      <Box sx={containerStyle} >
        {proyectos.map(({ duración, nombre, descripcion, index , linkGit}) => {
          return (
          
            <Card key={index} sx={gridStyle}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                image="https://www.shutterstock.com/image-vector/img-vector-icon-design-on-260nw-2164648583.jpg"
                sx={{ objectFit: "contain" }}
              />
              <CardContent
                 sx={{ objectFit: "contain" }}>
                 <Typography gutterBottom variant="h5" component="div" fontFamily={'Fjalla One'} fontWeight={"bold"}>
                  {nombre}
                </Typography>

                <Typography gutterBottom variant="body2" component="div">
                  Duración: {duración}
                </Typography>

                <Typography variant="body1" color="text.secondary">
                  {descripcion}
                </Typography>
              </CardContent>
      <Box sx={{m:"0 auto"}}>
              <BottomNavigationAction
        label="GitHub"
        value="github"
        icon={
          <BsGithub
          className={classes.icon}
           />
        }
        href={linkGit}
        target="_blank"
      />
    </Box>
            </Card>
          
          );
        })}
      </Box>

  );
}
