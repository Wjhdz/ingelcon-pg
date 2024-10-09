import React from "react";
import { Col, Row } from "../../tools/desing";
import Layout from "../../components/Layout/Layout";
import ImageCarousel from "../../components/image/ImageCarousel";
// import { text } from "../../utils/colors";

const Home: React.FC = () => {
  return (
    <Layout>
      <Row>
        <p>Home</p>
        <Col>
          <ImageCarousel />
        </Col>
      </Row>
    </Layout>
  );
};

export default Home;
