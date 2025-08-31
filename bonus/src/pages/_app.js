import { ThemeProvider, CssBaseline } from '@mui/material';
import { AppContextProvider } from '../lib/Context';
import theme from '../theme';
import Layout from '../components/layout/Layout';
import NotificationSystem from '../components/ui/NotificationSystem';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <NotificationSystem />
      </AppContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;