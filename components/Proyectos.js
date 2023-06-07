import { makeStyles } from "@material-ui/styles";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ProyectCard from "../commons/ProyectCard";

const Proyectos = ({ title, id, dark }) => {


  return (

    <Box  
      id="work"
     sx={{
      display:"flex",
      backgroundColor:"#16191e",
       justifyContent:"center",
       m:"auto",
       height: "100vh",
       flexDirection:"column"
        }}>

<Box sx={{ m:"auto", mt:20}} >

     <Typography color="#ed6c02" variant="h3" align="center" sx={{mb:15,fontWeight: "bold" }} >{title}</Typography>
    {/* <Box
      sx={{  
        m:"auto",
        //  color: "#grey",
      }}> */}

  
      <ProyectCard />
  </Box>
    </Box>
  );
};


export default Proyectos;
