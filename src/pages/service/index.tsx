import React from "react";
import { Row, Col, Card, Typography, Button } from "../../tools/desing";
import { services } from "../../constants";
import { Colors } from "../../utils/colors";
import Layout from "../../components/Layout/Layout";

const { Title, Paragraph } = Typography;

const { secondary } = Colors;
const Services: React.FC = () => {
  return (
    <Layout>
      <Col>
        <div
          style={{
            borderRadius: "1em",
          }}
        >
          {" "}
          <Col>
            <Title
              level={1}
              style={{
                color: secondary,
                textAlign: "center",
              }}
            >
              Nuestros Servicios
            </Title>
            <Row
              gutter={[16, 16]}
              style={{
                textAlign: "center",
                background: secondary,
                padding: "20px",
                borderRadius: "8px",
              }}
            >
              {services.map((service, index) => {
                return (
                  <Col xs={24} sm={24} md={8} xl={8} xxl={8} key={index}>
                    <Card
                      hoverable
                      style={{ height: "100%" }}
                      cover={
                        <Button
                          type="link"
                          style={{
                            margin: "20px auto",
                            color: secondary,
                          }}
                        >
                          {service.icon}
                        </Button>
                      }
                    >
                      <Card.Meta
                        title={
                          <Paragraph>
                            <Title level={4} style={{ color: secondary }}>
                              {service.title}
                            </Title>
                          </Paragraph>
                        }
                        description={
                          <Paragraph style={{ color: secondary }}>
                            {service.description}
                          </Paragraph>
                        }
                      />
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </div>
      </Col>
    </Layout>
  );
};

export default Services;
