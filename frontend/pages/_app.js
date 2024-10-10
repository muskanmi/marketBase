import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../styles/theme'; // Define your custom theme in a separate file
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Prevent the flickering of the Material-UI styles
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
