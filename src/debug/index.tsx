import { Stack, TextField, Typography } from '@mui/material';
import { createRoot } from 'react-dom/client';

import ThemeProvider from '@/@common/theme';
import { overrideConsoleLog } from '@/@common/utils/debug';

// ----------------------------------------------------------------------

window.console = overrideConsoleLog as any;
console.info('welcome to AutoForm for TIGET 🎉');
console.info('starting /src/main 💥');

const root = createRoot(document.body.appendChild(document.createElement('div')));

root.render(
  <ThemeProvider>
    <Stack mt={20} alignItems="center">
      <Typography variant="subtitle1">welcome to AutoForm for TIGET 🎊</Typography>
      <Typography>this is debug View.</Typography>

      <TextField />
    </Stack>
  </ThemeProvider>
);
