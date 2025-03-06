import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/deploy-example/", // Asegurar que GitHub Pages usa la ruta correcta
});
