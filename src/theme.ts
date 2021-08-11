import { createTheme } from '@material-ui/core/styles';

const defaultTheme = createTheme();

export const theme = createTheme({
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        root: {
          backgroundColor: 'red'
        }
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 40
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: defaultTheme.typography.pxToRem(15),
          fontWeight: 500
        }
      }
    }
  }
});
