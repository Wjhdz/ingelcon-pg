import React from "react";
import NavBar from "../menu/NavBar";
import CustomFooter from "../footer/Footer";
import CustomFloatButton from "../Button/CustomFloatButton";
import childrenprops from "../../interfaces/propsInterface";
import { Layout } from "../../tools/desing";
import { backgroundColorWhite, colorSecondary } from "../../css/styles";
import { secondary } from "../../utils/colors";

const { Header, Content, Footer } = Layout;

const LayoutC: React.FC<childrenprops> = ({ children }) => {
  return (
    <>
      <Header
        style={{
          minWidth: "412px ",
          position: "sticky",
          top: 0,
          zIndex: 1,
          ...backgroundColorWhite,
          borderBottom: `2px solid ${secondary}`,
        }}
      >
        <NavBar />
      </Header>
      <Content
        style={{
          minHeight: "auto",
          ...backgroundColorWhite,
          ...colorSecondary,
          minWidth: "412px ",
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
