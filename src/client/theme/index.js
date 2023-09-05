import { createTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import overrides from './overrides';

const theme = createTheme({
  palette,
  typography,
  components: {
    ...overrides
    //  MuiTextField: {
    //   defaultProps: {
    //     margin: 'dense',
    // 	size: 'small',
    // 	fullWidth: true
    //   },
    // }
  }
});

export default theme;
