import React from "react";
import { Row, Col, Typography, Space, Button } from "../../tools/desing";
import {
  MailOutlined,
  EnvironmentOutlined,
  FacebookOutlined,
  InstagramOutlined,
  PhoneFilled,
} from "../../tools/icon";
import type { LayoutFooterProps } from "../../interfaces/layout/layout";
import { colorSecondary, colorSecondaryAndWhite } from "../../css/styles";
import {
  city,
  departament,
  direccion,
  email,
  facebooklink,
  instagramLink,
  tel1,
  tel2,
} from "../../constants";
import { DividerC } from "../antd/DividerC";

const { Text } = Typography;

const CustomFooter: React.FC = () => {
  const access: LayoutFooterProps[] = [
    {
      link: instagramLink,
      icon: <InstagramOutlined />,
    },
    { link: facebooklink, icon: <FacebookOutlined /> },
  ];

  const onClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <Row gutter={[8, 8]} style={{ justifyContent: "center" }}>
      <Col xs={24} md={8} lg={8}>
        <Space direction="vertical">
          <Text style={colorSecondary} strong>
            Dirección:
          </Text>
          <Text style={colorSecondary}>
            <Col>
              <EnvironmentOutlined /> {direccion}
            </Col>
            <Col>
              {city} <DividerC></DividerC> {departament}
            </Col>
          </Text>
        </Space>
      </Col>
      <Col xs={24} md={8} lg={8}>
        <Space direction="vertical">
          <Text style={colorSecondary} strong>
            Correo Electrónico:
          </Text>
          <Text style={colorSecondary}>
            <MailOutlined /> {email}
          </Text>
          <Text style={colorSecondary} strong>
            Telefono:
          </Text>
          <Text style={colorSecondary}>
            <PhoneFilled rotate={90} /> {tel1} - {tel2}
          </Text>
        </Space>
      </Col>
      <Col xs={24} md={8} lg={8}>
        <Space direction="vertical">
          <Text style={colorSecondary} strong>
            Síguenos:
          </Text>
          <Space size="middle">
            {access.map((item, index) => (
              <Button
                style={colorSecondaryAndWhite}
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
