import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // Ensure the server is configured to handle SPA routing
    historyApiFallback: true,
  },
  plugins: [
    react(),
    ...(mode === 'development' ? [componentTagger()] : []) // Daha temiz syntax
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
  },
  // Ensure static assets are served correctly
  publicDir: 'public',
}));