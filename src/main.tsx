import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "./tools/desing.ts";
import App from "./App.tsx";
import "antd/dist/reset.css";
import { Colors } from "./utils/colors.ts";
import { InfoCompany } from "./constants.tsx";
const { secondary } = Colors;
const { nameCompany } = InfoCompany;
const parserNameCompany = nameCompany.split(" S.A.S.")[0];
console.log(parserNameCompany);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: secondary,
            colorTextPlaceholder: secondary,
            boxShadow: "0 4px 6px rgba(255, 165, 0, 0.4)",
            colorBorder: secondary,
          },
          components: {
            Input: {
              activeBorderColor: secondary,
              // hoverBorderColor: secondary,
              colorIcon: secondary,
              colorIconHover: secondary,
            },
            FloatButton: {
              colorBgBase: secondary,
              colorInfoActive: secondary,
              colorIcon: secondary,
              colorIconHover: secondary,
              colorBgContainer: secondary,
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.25)",
              boxShadowSecondary: "0 8px 16px rgba(0, 0, 0, 0.5)",
              boxShadowTertiary: "0 8px 16px rgba(0, 0, 0, 0.5)",
            },
            Card: {
              borderRadius: 1,
              colorPrimaryBorder: secondary,
              colorBorder: secondary,
              colorBorderSecondary: secondary,
              colorPrimaryBorderHover: secondary,
            },
          },
        }}
      >
        <title>{nameCompany.split(" S.A.S.")[0]}</title>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);
