import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../styles/theme"; // Define your custom theme in a separate file
import { useEffect } from "react";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Prevent the flickering of the Material-UI styles
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
