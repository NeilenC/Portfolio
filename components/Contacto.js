import { useTheme, makeStyles } from "@mui/styles";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2'
import React, { useRef, useState } from "react";

const Contacto = ({ title, id, dark }) => {
  const formRef = useRef()
  const [form, setForm] = useState({ name: "", lastName: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const theme = useTheme();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_fd25zel",
        "template_j4pcb79",
        {
          from_name: form.name,
          from_lastName: form.lastName,
          to_name: "Neilen",
          from_email: form.email,
          to_email: "neilen.monlezun@gmail.com",
          message: form.message,
        },
        "PfpSFOML3ikPgpTkB"
      )
      .then(
        () => {
          setLoading(false), Swal.fire(
            "Mensaje enviado!",
            'Gracias por contactarme',
            'success'
          );

          setForm({
            name: "",
            lastName:"" ,
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error)
          Swal.fire({
            title: 'Hubo un problema al enviar el mensaje',
            text: 'Disculpe las molestias',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        }
      );
  };


  return (
    <Box
      id="contact"
      sx={{
        display:"flex",
        height: "100vh",
        bgcolor:"#00000d"

      }}
    >

      {/* <Box sx={{
          display:"flex",
          justifyContent: "center", 
         height:"900px"
        }}> */}


      <Card sx={{
         m:"auto", 
 maxWidth: 600,

}} >

 <Box sx={{ border: "2px solid #ed6c02", borderRadius:"2px" ,  bgcolor:"#bebebe"}}  >

        <CardContent >
          <Typography sx={{fontWeight:"bold"}} gutterBottom variant="h4" align="center" color="#16191e" p="4%">
            {title}
          </Typography>
          <form 
           ref={formRef}
           onSubmit={handleSubmit}>
          
            <Grid container spacing={1} >
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Nombre"
                  name="name"
                  placeholder="Ingrese su Nombre"
                  variant="outlined"
                  color="warning"
                  fullWidth
                  required
                  value={form.name} 
                  onChange={handleChange}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Apellido"
                  name="lastName"
                  placeholder="Ingrese su Apellido"
                  variant="outlined"
                  color="warning"
                  fullWidth
                  value={form.lastName} // agregar el valor del estado
                  onChange={handleChange}
                  />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Ingrese su Email"
                  variant="outlined"
                  color="warning"
                  required
                  fullWidth
                   value={form.email} // agregar el valor del estado
                  onChange={handleChange}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  InputProps={{
                    style: { border: "none" },
                  }}
                  label="Mensaje"
                  name="message"
                  placeholder="Escriba su Mensaje"
                  color="warning"
                  variant="outlined"
                  multiline
                  rows={5}
                  required
                  fullWidth
                  value={form.message} // agregar el valor del estado
                  onChange={handleChange}
                />
              </Grid>
              <Grid xs={12} item>
                <Button 
                type="submit"
                variant="contained"
                color="warning"
                fullWidth
                >
                 {loading ? "Enviando..." : "Enviar"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
        </Box>
      </Card>
      {/* </Box> */}
    </Box>
  );
};

export default Contacto;
