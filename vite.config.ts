import { defineConfig, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { fileURLToPath } from 'url'; // Use URL API for __dirname equivalent in ESM

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), // Enable Vue support
  ],
  resolve: {
    // Optional: Setup aliases for cleaner imports within your library
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    // Enable library mode
    lib: {
      // Entry point for your library (now a .ts file)
      entry: path.resolve(__dirname, 'src/index.ts'), // Adjusted path to .ts

      // The name for the UMD global variable (e.g., window.VueNeobrutalistLibrary)
      name: 'VueNeobrutalistLibrary', // Use PascalCase

      // Output file name (without extension)
      fileName: 'vue-neobrutalist', // Keep it simple, Vite adds format suffix

      // Output formats ('es' for ESM, 'umd' for UMD)
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      // **Crucial:** Externalize dependencies that shouldn't be bundled
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        globals: {
          vue: 'Vue', // Map 'vue' import to global 'Vue' variable
        },
        // Ensure asset file names are handled (Vite's default usually works)
        // assetFileNames: 'vue-neobrutalist.[ext]', // Example if needed
      },
    },
    // Generate source maps for debugging
    sourcemap: true,
    // Empty the output directory before building
    emptyOutDir: true,
  },
} as UserConfig); // Cast to UserConfig for type safety if needed
