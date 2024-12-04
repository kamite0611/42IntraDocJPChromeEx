import { crx, defineManifest } from '@crxjs/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

/** manifest.json */
const manifest = defineManifest({
  manifest_version: 3,
  name: '42IntraDocJP',
  version: '0.0.1',

  description: '42Projects画面に日本語のドキュメントが追加されます。',
  action: {
    default_icon: {
      '16': 'icons/icon16.png',
      '24': 'icons/icon24.png',
      '32': 'icons/icon32.png',
    },
    default_title: '42IntraDocJP',
  },
  icons: {
    '16': 'icons/icon16.png',
    '32': 'icons/icon32.png',
    '48': 'icons/icon48.png',
    '128': 'icons/icon128.png',
  },
  author: 'kamiteakira@gmail.com',

  permissions: ['storage'],

  content_scripts: [
    {
      matches: ['https://tiget.net/*'],
      js: ['src/42intra/index.tsx'],
    },
  ],
});

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5173,
  },

  plugins: [
    react(),
    crx({ manifest }), // Chrome拡張機能としてmanifestを登録する
    tsconfigPaths(), // @/~ の読み込みに使用
  ],
});
