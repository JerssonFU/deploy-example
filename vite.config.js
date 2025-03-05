import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/deploy-example/", // Asegúrate de que coincide con tu repo en GitHub Pages
});
