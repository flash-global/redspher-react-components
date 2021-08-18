import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import themeConstants from './themeConstants'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: themeConstants.primary.main,
      light: themeConstants.primary.light,
      dark: themeConstants.primary.dark
    },
    secondary: {
      main: themeConstants.secondary.main,
      light: themeConstants.secondary.light,
      dark: themeConstants.secondary.dark
    }
  },
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    h2: {
      fontWeight: 'bold',
      color: themeConstants.grey.main,
      fontSize: '32px',
      lineHeight: '39px',
      [`@media only screen and (max-width: ${themeConstants.breakpoints.sm}px)`]:
        {
          fontSize: '22px',
          lineHeight: '26px'
        }
    }
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '40px',
        fontSize: '14px',
        textTransform: 'none'
      },
      containedPrimary: {
        color: themeConstants.white.main
      },
      outlinedPrimary: {
        color: themeConstants.black.main,
        '&:hover': {
          backgroundColor: themeConstants.primary.main,
          color: themeConstants.white.main
        }
      },
      textPrimary: {
        color: themeConstants.black.main,
        '&:hover': {
          color: themeConstants.primary.main
        }
      },
      iconSizeLarge: {
        '&> *:first-child': {
          fontSize: '25px'
        }
      }
    },
    MuiRadio: {
      root: {
        '&:disabled': {
          color: themeConstants.grey.main
        }
      },
      colorPrimary: {
        color: themeConstants.primary.main
      }
    },
    MuiChip: {
      root: {
        backgroundColor: themeConstants.green.main,
        color: themeConstants.white.main,
        '&$disabled': {
          backgroundColor: themeConstants.grey.dark,
          opacity: 1
        }
      },
      colorPrimary: {
        backgroundColor: themeConstants.orange.main
      },
      colorSecondary: {
        backgroundColor: themeConstants.red.main
      }
    }
  }
})

const ShipperThemeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default ShipperThemeProvider
