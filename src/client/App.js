import React from 'react';
import Layout from './components/layout';
import Navigation from './components/navigation';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import './app.css';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const App = props => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Layout>
            <Navigation />
          </Layout>
        </LocalizationProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
