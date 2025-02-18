import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite';


// https://vitejs.dev/config/`
export default defineConfig({
<<<<<<< Updated upstream
 plugins: [react()],
 server: {
 port: 3000,
 hmr: true,
 },
});
=======
  plugins: [react(),tailwindcss()],
  server: {
    port: 3000,
    hmr: true,
  },
});
>>>>>>> Stashed changes
