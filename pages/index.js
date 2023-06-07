import Image from "next/image";
import { makeStyles } from "@mui/styles";
import styles from "@/styles/Home.module.css";
import About from "@/components/About";
import Proyectos from "@/components/Proyectos";
import Contacto from "@/components/Contacto";
import Skills from "@/components/Skills";
import NavbarDos from "@/commons/NavbarDos";
import Layout from "@/commons/Layout";
import Footer from "@/commons/Footer";
import ParticlesBackground from "@/commons/Background";
import { Box } from "@mui/material";
import Intro from "@/components/Home";

export default function Home() {
  // const classes = useStyles();

  return (
    <Box sx={{position:"relative"}}>
      <div>
        <Layout />
        <NavbarDos />
        <ParticlesBackground/>
      </div>
      <div>
        <Intro title="HOME" />
        <About title="SOBRE MI" />
        <Skills title="SKILLS" />
        <Proyectos title="PROYECTOS" />
        <Contacto title="CONTACTO" />
      <Footer/>
      </div>
    </Box>
  );
}

