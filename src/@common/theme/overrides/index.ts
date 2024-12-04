import { Theme } from '@mui/material';

import MyCssBaseline from './CssBaseline';
import MyInput from './Input';

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(MyInput(theme), MyCssBaseline(theme));
}
