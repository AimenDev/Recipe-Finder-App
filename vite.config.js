import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy requests starting with '/api/recipes'
      "/api/recipes": {
        target: "https://api.edamam.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/recipes/, "/api/recipes/v2"),
      },
    },
  },
});
