
import React from 'react'
import { Box, Grid, Typography , Button} from '@mui/material'
import { useTheme } from "@mui/styles";
import Image from 'next/image';
import photo from "../public/image.png";


const Intro = ({id, title}) => {
  const theme = useTheme();

  return (
   <Box id="intro"
   sx={{
    height: "100vh",
    color: "grey",
    bgcolor:"#00000d"
    }}>

<Grid container
        sx={{
        width:"100%",
        minHeight:"90%",
        }}>

          <Grid item xs={12} lg={9} sx={{  wordWrap: "break-word",  pt:"140px", m:"auto" , display:"flex"}} >.

          <Box sx={{ m:"auto" ,}}>
          <Box>
          <Typography sx={{alignItems:"flex-end", display:"flex" ,fontFamily: 'Fjalla One', fontWeight:"semi bold"}}
           variant="h2" color="#ffffff" >
              ¡Hola! Mi nombre es Neilén <br/>
       
             FULLSTACK DEVELOPER
              
               </Typography>
               
          </Box>

            <Typography color="whitesmoke"  variant="body1" sx={{ fontWeight:"semi bold", fontSize:"20px",  maxWidth:"700px",  pt:"3%",  m:"auto" }}>
                      
              Con experiencia en React.js y Node.js,de las ciudades de Pergamino/La Plata,
               en Buenos Aires, Argentina. Predispuesta y proactiva, me gusta trabajar en equipo, aprender y aplicar nuevas tecnologías.<br/>


               <Typography sx={{alignItems:"flex-end",  fontFamily: 'Bungee', pt:6, pb:6}} variant="h4" color="lightgrey" >
                ¡Bienvenido a mi portfolio! 
               </Typography>

            </Typography>
               <Button variant="contained" 
               color="warning"
              //  className={classes.pdfButton}
               sx={{
                pt:3,
                borderRadius:"3px",
                color:"black",
                "&: hover": {
                  backgroundColor: "#ed6c02",
                },
                "& a": {
                  color: "lightgrey",
                  padding:"20px",
                  fontWeight:"bold",
                  fontSize:"18px",
                  textDecoration: "none",
           
                },
                "& a:hover": {
                  color: "#fffff"
                },
               }}
               >
                 <a href="/CVn.pdf" download="CV.pdf">
                Descargar CV
                </a>
               </Button>
          </Box>
               <Grid item  xs={12} lg={4} sx={{display:"flex" }}>
           

                  <Box sx={{ m:"auto" }}>

                    <Image
                    src={photo}
                    alt="Neilen"
                    width={400}
                    height={500}
                  
                    />
                  </Box>
              </Grid>
            </Grid>
      </Grid>
    </Box>
  );

}

export default Intro