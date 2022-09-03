import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import path from "path";
import { defineConfig } from "vite";

dotenv.config();

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./")
        }
    },
    server: {
        port: parseInt(process.env.PORT || "8087")
    },
    base: "/packet-analyzer/"
});
