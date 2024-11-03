import React from "react";
import { Row, Col, Typography, Image } from "../../tools/desing";
import { aboutUs } from "../../constants";
import { Colors } from "../../utils/colors";

const { secondary, white } = Colors;
const { Title, Paragraph } = Typography;

const About: React.FC = () => {
  return (
    <>
      <Col
        xs={24}
        md={24}
        lg={24}
        xl={24}
        xxl={24}
        style={{
          alignContent: "center",
          textAlign: "center",

          borderRadius: "8px",
          color: secondary,
        }}
      >
        <Row style={{ background: white }}>
          <Col xs={24} md={24} lg={24} xl={24} xxl={24}>
            <Title
              level={2}
              style={{
                color: secondary,
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              {aboutUs.title}
            </Title>
          </Col>
          <Col xs={12} md={12} lg={24} xl={24} xxl={24}>
            <Col style={{ padding: "20px", justifyContent: "center" }}>
              <Paragraph
                style={{
                  color: secondary,
                  alignItems: "flex-end",
                  justifyContent: "end",
                }}
              >
                {aboutUs.description}
              </Paragraph>
            </Col>
          </Col>
          <Col xs={12} md={12} lg={24} xl={24} xxl={24}>
            <Image
              preview={false}
              src={aboutUs.image}
              alt="About Us"
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default About;
