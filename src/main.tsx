import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "./tools/desing.ts";
import App from "./App.tsx";
import "antd/dist/reset.css";
import { titleEnterprise } from "./constants.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider>
        <title>{titleEnterprise}</title>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);
