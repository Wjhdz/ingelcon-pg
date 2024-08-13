import React from "react";
import NavBar from "../menu/NavBar";
import CustomFooter from "../footer/Footer";
import CustomFloatButton from "../Button/CustomFloatButton";
import childrenprops from "../../interfaces/propsInterface";
import { Layout } from "../../tools/desing";
import { backgroundColorWhite } from "../../css/styles";

const { Header, Content, Footer } = Layout;

const Home: React.FC<childrenprops> = ({ children }) => {
  return (
    <Layout>
      <Header style={backgroundColorWhite}>
        <NavBar />
      </Header>
      <Content style={{ minHeight: "80vh", ...backgroundColorWhite }}>
        {children}
        <CustomFloatButton />
      </Content>
      <Footer style={backgroundColorWhite}>
        <CustomFooter />
      </Footer>
    </Layout>
  );
};

export default Home;
