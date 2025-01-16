import React from "react";
import { Col, Row } from "../../tools/desing";
import LayoutC from "../../components/layout/index";
import Hero from "../../components/Hero";
// import ImageCarousel from "../../components/image/ImageCarousel";
// import { text } from "../../utils/colors";

const Home: React.FC = () => {
  return (
    <LayoutC>
      <Row>
        <Col xs={24} md={24} lg={24} xl={24} xxl={24}>
          <Hero />
        </Col>
        <Col xs={24} md={24} lg={24} xl={24} xxl={24}></Col>
      </Row>
    </LayoutC>
  );
};

export default Home;
