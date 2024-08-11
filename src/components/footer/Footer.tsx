import React from "react";
import {
  Row,
  Col,
  Typography,
  FacebookOutlined,
  InstagramOutlined,
  Space,
  WhatsAppOutlined,
  MailOutlined,
  EnvironmentOutlined,
  Button,
} from "../antd/antdComponents";
import type { LayoutFooterProps } from "../../interfaces/layout/layout";

const { Text } = Typography;

const CustomFooter: React.FC = () => {
  const access: LayoutFooterProps[] = [
    { link: "https://wa.me/tu_numero", icon: <WhatsAppOutlined /> },
    {
      link: "https://www.instagram.com/tu_perfil",
      icon: <InstagramOutlined />,
    },
    { link: "https://www.facebook.com/tu_perfil", icon: <FacebookOutlined /> },
  ];

  const onClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <Row gutter={[8, 8]}>
      <Col xs={24} md={8} lg={8}>
        <Space direction="vertical">
          <Text strong>Dirección:</Text>
          <Text>
            <EnvironmentOutlined /> Calle Ejemplo 123, Ciudad, País
          </Text>
        </Space>
      </Col>
      <Col xs={24} md={8} lg={8}>
        <Space direction="vertical">
          <Text strong>Correo Electrónico:</Text>
          <Text>
            <MailOutlined /> contacto@ejemplo.com
          </Text>
        </Space>
      </Col>
      <Col xs={24} md={8} lg={8}>
        <Space direction="vertical">
          <Text strong>Síguenos:</Text>
          <Space size="middle">
            {access.map((item, index) => (
              <Button
                style={{ color: "white", background: "black" }}
                key={index}
                type="link"
                onClick={() => onClick(item.link)}
                icon={item.icon}
              />
            ))}
          </Space>
        </Space>
      </Col>
    </Row>
  );
};

export default CustomFooter;
