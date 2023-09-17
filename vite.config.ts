import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import checker from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  console.log(`vite mode => ${mode}`);

  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      tsconfigPaths(),
      checker({
        // Typechecking in development mode
        typescript: true,
        // Linting in production mode
        ...(mode === 'production' && {
          eslint: {
            lintCommand:
              'eslint "./src/**/*.{ts,tsx}"' +
              ' --report-unused-disable-directives' +
              ' --max-warnings 0',
          },
        }),
      }),
    ],
    server: {
      port: 3000,
    },
    build: {
      outDir: 'build',
      chunkSizeWarningLimit: 1000,
    },
  };
});
