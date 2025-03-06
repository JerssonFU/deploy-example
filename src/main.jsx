import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const isGitHubPages = window.location.hostname.includes("github.io");
const baseName = isGitHubPages ? "/deploy-example" : "/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter basename={baseName}>
      <App />
    </HashRouter>
  </React.StrictMode>
);
