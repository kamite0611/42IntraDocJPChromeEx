import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function MyInput(theme: Theme) {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          input: {
            '&[type=checkbox]': {
              width: 'initial',
              height: 'initial',
              marginRight: '0',
            },
            '&::placeholder': {
              fontSize: '13px',
            },
            '&[type=number]': {
              MozAppearance: 'textfield',
              '&::-webkit-outer-spin-button': {
                margin: 0,
                WebkitAppearance: 'none',
              },
              '&::-webkit-inner-spin-button': {
                margin: 0,
                WebkitAppearance: 'none',
              },
            },
          },
        },
      },
    },
    MuiFilledInput: {},
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&.MuiInputBase-multiline': {
            padding: '7px 0',
            lineHeight: '18px',
          },

          '& .MuiOutlinedInput-input': {
            padding: '7px 12px',
            fontSize: '12px',
          },

          '&.Mui-disabled': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.action.disabledBackground,
            },
          },
        },
      },
    },
  };
}
