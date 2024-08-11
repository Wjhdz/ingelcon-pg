import React from "react";
import { Row } from "../../components/antd/antdComponents";
import Layout from "../../components/Layout/Layout";
import { text } from "../../utils/colors";

const Home: React.FC = () => {
  return (
    <Layout>
      <Row>

        <p style ={{color:`${text}`}} >Home</p>
      </Row>
    </Layout>
  );
};

export default Home;
