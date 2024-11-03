import React from "react";
import { Col, Row } from "../../tools/desing";
import Layout from "../../components/Layout/Layout";
// import ImageCarousel from "../../components/image/ImageCarousel";
import Hero from "../../components/Hero";
import About from "../about";
import Service from "../service";
import Projects from "../projects";
import "../../css/style.css";
// import { text } from "../../utils/colors";

const Home: React.FC = () => {
  return (
    <Layout>
      <Row>
        <Col
          xs={24}
          md={24}
          lg={24}
          xl={24}
          xxl={24}
          id="/"
          className="section"
        >
          <Hero />
        </Col>
        <Col id="/nosotros" className="section">
          <About />
        </Col>
        <Col id="/servicios" className="section">
          <Service />
        </Col>
        <Col id="/proyectos" className="section">
          <Projects />
        </Col>
      </Row>
    </Layout>
  );
};

export default Home;
