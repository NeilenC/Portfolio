import * as React from "react";
import { Divider, Grid, Typography,  Box,   useMediaQuery ,Button} from "@mui/material";
import postgreSQL from "../public/postgresql.svg"
import Image from "next/image";
import mongo from "../public/mongodb.svg"
import js from "../public/javascript.svg"
import mongoose from "../public/mongoose.svg"
import sequelize from "../public/sequelize.svg"
import mui from "../public/mui.svg"
import css3 from "../public/css3.svg"
import express from "../public/express.svg"
import next from "../public/next.svg"
import redux from "../public/redux.svg"
import react from "../public/react.svg"
import node from "../public/nodedotjs.svg"
import html5 from "../public/html5.svg"
import { useTheme, makeStyles } from "@mui/styles";


export default function Tech() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [selectedTech, setSelectedTech] = React.useState("back");
  const classes = useStyles();


  const backend = [
    { nombre: "Node.js" ,img: node , alt: 'Icon 1'},
    { nombre: "Express.js" ,img: express , alt: 'Icon 2' },
    { nombre: "Sequelize" ,img:sequelize , alt: 'Icon 3'},
    { nombre: "Mongoose" ,img: mongoose , alt: 'Icon 4'},
  ];
  const frontend = [
    { nombre: "React.js",img: react , alt: 'Icon 8'},
    { nombre: "Redux.js" ,img: redux, alt: 'Icon 9 '},
    { nombre: "HTML" ,img: html5, alt: 'Icon 10'},
    { nombre: "CSS" ,img: css3, alt: 'Icon 11'},
    { nombre: "MUI" ,img: mui, alt: 'Icon 12'},

  ];
  const databases = [{ nombre: "PostgreSQL" ,img: postgreSQL, alt: 'Icon 1'}, { nombre: "MongoDB",img: mongo , alt: 'Icon 1'}];

  let techList = [];

  switch (selectedTech) {
    case "front":
      techList = frontend;
      break;
    case "back":
      techList = backend;
      break;
    case "db":
      techList = databases;
      break;
    default:
      techList = [];
      break;
  }



  return (
    <Box container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 5,
          justifyContent: "space-between",
          p: "3%",
          mb:"7%"
        }}>
        <Button 
          sx={{ padding: theme.spacing(2), }}
          className={selectedTech === "front" ? classes.selected : ""}
          onClick={() => setSelectedTech("front")}
        >
          <Typography sx={{fontSize:"30px", fontWeight:"bold", padding:5, color:"lightgrey"}}

           variant="h6">Front-end</Typography>
        </Button>
        <Button
          sx={{padding: theme.spacing(2), zIndex: 10}}
          className={selectedTech === "back" ? classes.selected : ""}
          onClick={() => setSelectedTech("back")}
        >
          <Typography sx={{fontSize:"30px", fontWeight:"bold", padding:5, color:"lightgrey"}} variant="h6">Back-end</Typography>
        </Button>
        <Button
          sx={{ padding: theme.spacing(2),}}
          onClick={() => setSelectedTech("db")}
          className={selectedTech === "db" ? classes.selected : ""}
        >
          <Typography sx={{fontSize:"30px", fontWeight:"bold" , padding:5, borderRadius:"3px", color:"lightgrey"}} variant="h6">Databases</Typography>
        </Button>
      </Box>
      
 
        <Box sx={{ display: "flex", flexDirection: "row"}}>
          {techList.map((tech, index) => (
            
           <Box key={index} sx={{ m: 5, textAlign: "center" , m:"auto", p: "30px 30px 30px 30px" ,  zIndex: 1 , bgcolor:"lightgrey", borderRadius:"15px"}}>
            <Grid sx={{ fontSize: "30px", fontFamily:"Arial",fontWeight: "bold", mb: 2 }}>
            {tech.nombre}
            </Grid>
           <Image src={tech.img} alt={tech.alt} width={100} height={100} />
      </Box>
    ))}
  </Box>
    </Box>
  );
}


const useStyles = makeStyles({
  selected: {
    color:"#fdb137",
  },
});