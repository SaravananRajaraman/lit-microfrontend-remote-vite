import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    federation({
      name: 'litMicrofrontend',
      filename: 'remoteEntry.js',
      exposes: {
        './my-element': './src/my-element.js',
      },
      shared: ['lit'],
    }),
  ],
  build: {
    target: 'esnext',
    minify: false,
  },
});
