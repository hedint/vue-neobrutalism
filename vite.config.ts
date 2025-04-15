// vite.config.ts
import { resolve } from "node:path";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    vue(), // Enable Vue plugin
    dts({ // Generate declaration files (*.d.ts)
      // Specify the entry root directory (usually 'src')
      // This helps ensure correct output paths for declaration files.
      entryRoot: "src",
      // Optionally specify the output directory for declaration files
      // Defaults to 'dist' if not specified.
      // outputDir: 'dist/types',
      insertTypesEntry: true, // Inserts an entry point for types in package.json
    }),
  ],
  resolve: {
    // Optional: Setup aliases for cleaner imports within your library
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    // Library Mode configuration
    lib: {
      // The entry point for your library's source code
      entry: resolve(__dirname, "src/index.ts"),
      // The name for the global variable (in UMD builds)
      name: "vueNeobrutalism",
      // The output file name formats (without extension)
      // - 'es' for ES module format
      // - 'umd' for Universal Module Definition format
      fileName: format => `vue-neobrutalism.${format}.js`,
    },
    // Rollup specific options
    rollupOptions: {
      // Ensure Vue is treated as an external dependency
      // This prevents bundling Vue core with your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps (like Vue)
        globals: {
          vue: "Vue",
        },
        // Optional: Configure exports for better tree shaking
        // 'named' preserves named exports
        // 'auto' lets Rollup guess
        exports: "named",
      },
    },
    // Optional: Generate sourcemaps for easier debugging
    sourcemap: true,
    // Optional: Empty the output directory before building
    emptyOutDir: true,
  },
});
