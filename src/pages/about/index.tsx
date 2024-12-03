import React from "react";
import Layout from "../../components/Layout/Layout";
import { Row, Col, Typography, Image } from "../../tools/desing";
import { aboutUs } from "../../constants";
import { Colors } from "../../utils/colors";

const { secondary, white } = Colors;
const { Title, Paragraph } = Typography;

const About: React.FC = () => {
  return (
    <Layout>
      <Col
        xs={24}
        md={24}
        lg={24}
        xl={24}
        xxl={24}
        style={{
          alignContent: "center",
          textAlign: "center",
          margin: "10px",

          borderRadius: "8px",
          color: secondary,
        }}
      >
        <Row style={{ background: white }}>
          <Col xs={24} md={12} lg={24} xl={24} xxl={24}>
            <Title
              level={1}
              style={{
                color: secondary,
                textAlign: "center",
                marginBottom: "40px",
              }}
            >
              {aboutUs.title}
            </Title>
          </Col>
          <Col xs={24} md={12} lg={24} xl={24} xxl={24}>
            <Paragraph style={{ color: secondary }}>
              {aboutUs.description}
            </Paragraph>
          </Col>
          <Col xs={24} md={12} lg={24} xl={24} xxl={24}>
            <Image
              preview={false}
              src={aboutUs.image}
              alt="About Us"
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </Col>
        </Row>
      </Col>
    </Layout>
  );
};

export default About;
