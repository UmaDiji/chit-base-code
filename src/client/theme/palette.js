import {colors} from '@mui/material'

const white = '#FFFFFF';
const black = '#000000';

export default {
  black,
  white,
  primary: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[800],
    light: colors.blue[500]
  },
  secondary: {
    contrastText: white,
    dark: colors.deepOrange[900],
    main: colors.deepOrange['A400'],
    light: colors.deepOrange['A400']
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600],
    link: colors.blue[600]
  },
  link: colors.blue[800],
  icon: colors.blueGrey[600],
  background: {
    default: '#EDF5F8',
    paper: white
  },
  divider: colors.grey[200],
  selecteditem: colors.grey[400]
};