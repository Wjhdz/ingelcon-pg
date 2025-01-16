import React from "react";
import { Col, Row } from "../../tools/desing";
import Layout from "../../components/Layout";
// import ImageCarousel from "../../components/image/ImageCarousel";
import Hero from "../../components/Hero";
// import { text } from "../../utils/colors";

const Home: React.FC = () => {
  return (
    <Layout>
      <Row>
        <Col xs={24} md={24} lg={24} xl={24} xxl={24}>
          <Hero />
        </Col>
        <Col xs={24} md={24} lg={24} xl={24} xxl={24}></Col>
      </Row>
    </Layout>
  );
};

export default Home;
