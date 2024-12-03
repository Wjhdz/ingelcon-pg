import React from "react";
import { Row, Col, Card, Typography } from "../../tools/desing";
import { projects } from "../../constants";
import Layout from "../../components/Layout/Layout";
import { Colors } from "../../utils/colors";

const { secondary } = Colors;
const { Title, Paragraph } = Typography;

const Projects: React.FC = () => {
  return (
    <Layout>
      <Col>
        <Title
          level={1}
          style={{
            color: secondary,
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Nuestros Proyectos
        </Title>
        <Row gutter={[16, 16]} style={{ textAlign: "center" }}>
          {projects.map((project, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Card
                style={{ color: secondary }}
                hoverable
                cover={
                  <img
                    alt={project.title}
                    src={project.image}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                }
              >
                <Card.Meta
                  title={
                    <Title style={{ color: secondary }} level={4}>
                      {project.title}
                    </Title>
                  }
                  description={
                    <Paragraph style={{ color: secondary }}>
                      {project.description}
                    </Paragraph>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
    </Layout>
  );
};

export default Projects;
