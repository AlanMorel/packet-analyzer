import App from "@/src/App";
import React from "react";
import ReactDOM from "react-dom/client";

const root = document.querySelector(".root") as HTMLElement;

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
