import React from 'react';
import ReactDOM from 'react-dom/client';

import { PopupApp } from './App';
import ThemeProvider from '../@common/theme';

import { overrideConsoleLog } from '@/@common/utils/debug';

window.console = overrideConsoleLog as any;

/**
 * Chrome拡張機能のアイコンを押下時のポップアップViewRoot
 */

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <PopupApp />
    </ThemeProvider>
  </React.StrictMode>
);
