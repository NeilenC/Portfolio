import { makeStyles } from "@material-ui/styles";
import { Box, Grid, Typography } from "@mui/material";

import React from "react";
import Tech from "../commons/Tech";

const Skills = ({ title, id, dark }) => {
  // const classes = useStyles();

  return (
    <Box
      id="skills"
      sx={{
        display:"flex",
        flexDirection:"column",
         height: "100vh",
         background:"#00000d",


         color: "#fff",
         display:"flex" }}
         >
        
      <Grid
        sx={{
          borderRadius:"5px",
          maxWidth: "60vw",
          margin: "auto",

          mt:20,
          color: " #333",
          width:"70%"
        }}
      >


        <Box sx={{  m:"auto" , p:10, mb:5}}>
          <Tech />
           <Typography sx={{mt:10, fontWeight:"bold"}} variant="h3" color="#ed6c02" align="center" >
              {title}
              </Typography>
          </Box>
        </Grid>

    </Box>
  );
};

// const useStyles = makeStyles((theme) => ({
//   section: {
//     height: "100vh",
//   },
//   sectiondark: {
//     background: "#333",
//     color: "#fff",
//   },
// }));
export default Skills;
