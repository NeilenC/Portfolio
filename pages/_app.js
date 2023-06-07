import "../styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: [
     
      'Arial',
      'Fjalla One',
      'Bungee',
      "Roboto"
   
    ].join(','),
  },
});

export default function App({ Component, pageProps }) {
  return (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>);
}

