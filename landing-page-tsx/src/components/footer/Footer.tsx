import React from "react";
import {
  Layout,
  Row,
  Col,
  Typography,
  FacebookOutlined,
  InstagramOutlined,
  Space,
  WhatsAppOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from "../antd/antdComponents";
const { Footer } = Layout;
const { Text, Link } = Typography;

const CustomFooter: React.FC = () => {
  return (
    <Footer
      style={{
        minHeight: "28vh",
        backgroundColor: "#f0f2f5",
        padding: "20px 50px",
      }}
    >
      <Row justify="space-between">
        <Col xs={24} sm={12} md={8}>
          <Space direction="vertical">
            <Text strong>Dirección:</Text>
            <Text>
              <EnvironmentOutlined /> Calle Ejemplo 123, Ciudad, País
            </Text>
          </Space>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Space direction="vertical">
            <Text strong>Correo Electrónico:</Text>
            <Text>
              <MailOutlined /> contacto@ejemplo.com
            </Text>
          </Space>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Space direction="vertical">
            <Text strong>Síguenos:</Text>
            <Space size="middle">
              <Link href="https://www.instagram.com/tu_perfil" target="_blank">
                <InstagramOutlined style={{ fontSize: "24px" }} />
              </Link>
              <Link href="https://www.facebook.com/tu_perfil" target="_blank">
                <FacebookOutlined style={{ fontSize: "24px" }} />
              </Link>
              <Link href="https://wa.me/tu_numero" target="_blank">
                <WhatsAppOutlined style={{ fontSize: "24px" }} />
              </Link>
            </Space>
          </Space>
        </Col>
      </Row>
    </Footer>
  );
};

export default CustomFooter;
