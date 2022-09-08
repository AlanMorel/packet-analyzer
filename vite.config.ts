import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import path from "path";
import { defineConfig } from "vite";

dotenv.config();

export default defineConfig({
    plugins: [react()],
    base: "/packet-analyzer/",
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./")
        }
    },
    server: {
        port: parseInt(process.env.PORT || "8087")
    },
    build: {
        rollupOptions: {
            output: {
                format: "es"
            }
        }
    }
});
