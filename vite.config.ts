import type { UserConfig } from "vite";
import path from "node:path";
import { fileURLToPath } from "node:url"; // Use URL API for __dirname equivalent in ESM
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

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
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    // Enable library mode
    lib: {
      // Entry point for your library (now a .ts file)
      entry: path.resolve(__dirname, "src/index.ts"), // Adjusted path to .ts
      // Output file name (without extension)
      fileName: "vue-neobrutalism", // Keep it simple, Vite adds format suffix

      // Output formats ('es' for ESM, 'umd' for UMD)
      formats: ["es"],
    },
    rollupOptions: {
      // **Crucial:** Externalize dependencies that shouldn't be bundled
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        globals: {
          vue: "Vue", // Map 'vue' import to global 'Vue' variable
        },
        // Ensure asset file names are handled (Vite's default usually works)
        // assetFileNames: 'vue-neobrutalism.[ext]', // Example if needed
      },
    },
    // Generate source maps for debugging
    sourcemap: true,
    // Empty the output directory before building
    emptyOutDir: true,
  },
} as UserConfig); // Cast to UserConfig for type safety if needed
