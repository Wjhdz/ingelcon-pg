import React from "react";
import NavBar from "../navigation/NavBar";
import CustomFooter from "../footer/Footer";
import CustomFloatButton from "../Button/CustomFloatButton";
import childrenprops from "../../interfaces/propsInterface";
import { Layout } from "../../tools/desing";
import {
  backgroundColorWhite,
  contentLayoutStyle,
  headerLayoutStyle,
} from "../../css/styles";
const { Header, Content, Footer } = Layout;

const LayoutC: React.FC<childrenprops> = ({ children }) => {
  return (
    <>
      <Header style={headerLayoutStyle}>
        <NavBar />
      </Header>
      <Content style={contentLayoutStyle}>
        {children}
        <CustomFloatButton />
      </Content>
      <Footer style={{ minWidth: "411px", ...backgroundColorWhite }}>
        <CustomFooter />
      </Footer>
    </>
  );
};

export default LayoutC;
