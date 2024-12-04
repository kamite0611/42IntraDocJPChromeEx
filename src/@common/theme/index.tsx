import { CssBaseline } from '@mui/material';
import { createTheme, ThemeOptions, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { useMemo, ReactNode } from 'react';

import componentsOverride from './overrides';

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const isLight = true;
  const themeDirection = 'ltr';

  const themeOptions: ThemeOptions = useMemo(() => ({}), [isLight, themeDirection]);

  const theme = createTheme(themeOptions);

  theme.components = componentsOverride(theme);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {/* <GlobalStyles /> */}
      {children}
    </MUIThemeProvider>
  );
}
