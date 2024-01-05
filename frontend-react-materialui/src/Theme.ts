import { createTheme, ThemeOptions } from '@mui/material';
import { blue, deepPurple, pink } from '@mui/material/colors';

const defaultTheme = createTheme();
const themeOptions: ThemeOptions = {
  palette: {
    primary: deepPurple,
    secondary: pink,
  },

  //   status: {
  //     danger: 'blue',
  //   },
  breakpoints: {
    values: {
      ...defaultTheme.breakpoints.values,
      // mobile: 0,
      tablet: 768,
      laptop: 1024,
      desktop: 1200,
    },
  },

  typography: {
    button: {
      textTransform: 'none',
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
