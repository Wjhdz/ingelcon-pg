import React from "react";
import { Row, Col, Typography, Space, Button } from "../../tools/desing";
import {
  MailOutlined,
  EnvironmentOutlined,
  PhoneFilled,
} from "../../tools/icon";
import { colorSecondary, colorSecondaryAndWhite } from "../../css/styles";
import { InfoCompany, socialmedia as access } from "../../constants";
const { city, departament, adress, email, phone1, phone2 } = InfoCompany;

import { DividerC } from "../antd/DividerC";

const { Text } = Typography;

const CustomFooter: React.FC = () => {
  const onClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <Row gutter={[8, 8]} style={{ justifyContent: "center" }}>
      <Col xs={24} md={8} lg={8} xl={8} xxl={8}>
        <Space direction="vertical">
          <Text style={colorSecondary} strong>
            Dirección:
          </Text>
          <Text style={colorSecondary}>
            <Col>
              <EnvironmentOutlined /> {adress}
            </Col>
            <Col>
              {city} <DividerC></DividerC> {departament}
            </Col>
          </Text>
        </Space>
      </Col>
      <Col xs={24} md={8} lg={8} xl={8} xxl={8}>
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
            <PhoneFilled rotate={90} /> {phone1} - {phone2}
          </Text>
        </Space>
      </Col>
      <Col xs={24} md={8} lg={8} xl={8} xxl={8}>
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
