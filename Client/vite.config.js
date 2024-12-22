import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080, // Set the Vite server port to 80 for production
    host: true, // Expose the server to all network interfaces
  },
});
