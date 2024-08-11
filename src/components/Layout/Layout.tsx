import React from "react";
import { Layout } from "../antd/antdComponents";
import NavBarDesktop from "../menu/NavBarDesktop";
import CustomFooter from "../footer/Footer";
import childrenprops from "../../interfaces/propsInterface";
import { grey } from "../../utils/colors";

const { Header, Content, Footer } = Layout;

const Home: React.FC<childrenprops> = ({ children }) => {
  return (
    <Layout>
      <Header style={{ background: `${grey}` }}>
        <NavBarDesktop />
      </Header>
      <Content style={{ minHeight: "80vh", background: `${grey}` }}>
        {children}
      </Content>
      <Footer style={{ background: `${grey}` }}>
        <CustomFooter />
      </Footer>
    </Layout>
  );
};

export default Home;
