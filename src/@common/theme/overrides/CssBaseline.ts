import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function MyCssBaseline(theme: Theme) {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        // '*': {
        //   margin: 0,
        //   padding: 0,
        //   boxSizing: 'border-box',
        // },
        // html: {
        //   width: '100%',
        //   height: '100%',
        //   WebkitOverflowScrolling: 'touch',
        // },
        // body: {
        //   width: '100%',
        //   height: '100%',
        // },
        // '#__next': {
        //   width: '100%',
        //   height: '100%',
        // },
        // input: {
        //   '&::placeholder': {
        //     fontSize: '11px'
        //   },
        //   '&[type=number]': {
        //     MozAppearance: 'textfield',
        //     '&::-webkit-outer-spin-button': {
        //       margin: 0,
        //       WebkitAppearance: 'none',
        //     },
        //     '&::-webkit-inner-spin-button': {
        //       margin: 0,
        //       WebkitAppearance: 'none',
        //     },
        //   },
        //   '&[type=time]': {
        //     MozAppearance: 'textfield',
        //     '&::-webkit-calendar-picker-indicator': {
        //       display: 'none',
        //     },
        //   },
        // },
        // img: {
        //   display: 'block',
        //   maxWidth: '100%',
        // },
      },
    },
  };
}
