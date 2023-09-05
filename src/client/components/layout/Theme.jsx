import { createTheme } from '@mui/material/styles';
const RadiateTheme = createTheme({
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: '#ffffff'
      }
    }
  },
  palette: {
    // primary: {
    //   main: '#ffffff'
    // },
    // secondary: {
    //   main: '#ffa300'
    // },
    // tertiary: {
    //   main: '#93da49'
    // },
    // action: {
    //   active: '#fe5000'
    // },
    contrastThreshold: 3,
    tonalOffset: 0.2
  },
  typography: {
    h1: {
      fontFamily: 'Source Sans Pro',
      fontSize: '2rem'
    },
    h2: {
      fontFamily: 'Source Sans Pro',
      fontSize: '1.5rem'
    },
    body1: {
      fontFamily: 'Source Sans Pro',
      fontWeight: 600
    }
  }
});

export default RadiateTheme;
