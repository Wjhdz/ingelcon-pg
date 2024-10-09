import React from "react";
import NavBar from "../menu/NavBar";
import CustomFooter from "../footer/Footer";
import CustomFloatButton from "../Button/CustomFloatButton";
import childrenprops from "../../interfaces/propsInterface";
import { Layout } from "../../tools/desing";
import { backgroundColorWhite, colorSecondary } from "../../css/styles";

const { Header, Content, Footer } = Layout;

const LayoutC: React.FC<childrenprops> = ({ children }) => {
  return (
    <>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          ...backgroundColorWhite,
        }}
      >
        <NavBar />
      </Header>
      <Content
        style={{
          minHeight: "80vh",
          ...backgroundColorWhite,
          ...colorSecondary,
        }}
      >
        {children}
        <CustomFloatButton />
      </Content>
      <Footer style={backgroundColorWhite}>
        <CustomFooter />
      </Footer>
    </>
  );
};

export default LayoutC;
