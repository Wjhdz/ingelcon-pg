import React from "react";
import NavBar from "../navigation/NavBar";
import CustomFooter from "../footer/Footer";
import CustomFloatButton from "../../components/button/CustomFloatButton/index";
import childrenprops from "../../interfaces/propsInterface";
import { Layout } from "../../tools/desing";
import {
  footerLayoutStyle,
  contentLayoutStyle,
  headerLayoutStyle,
} from "../../css/styles";

// Update the component to use the new props interface
const { Header, Content, Footer } = Layout;

const LayoutC: React.FC<childrenprops> = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={headerLayoutStyle}>
        <NavBar />
      </Header>
      <Content style={contentLayoutStyle}>
        {children}
        <CustomFloatButton />
      </Content>
      <Footer style={footerLayoutStyle}>
        <CustomFooter />
      </Footer>
    </Layout>
    // Comenatrio
  );
};

export default LayoutC;
