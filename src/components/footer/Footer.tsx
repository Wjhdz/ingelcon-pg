import React from "react";
import { Row, Col, Typography, Space, Button } from "../../tools/desing";
import {
  MailOutlined,
  EnvironmentOutlined,
  PhoneFilled,
} from "../../tools/icon";

import { InfoCompany, socialmedia as access } from "../../constants";
const { nameCompany, city, departament, adress, email, phone1, phone2 } =
  InfoCompany;
const { secondary, white } = Colors;
import { DividerC } from "../antd/DividerC";
import { Colors } from "../../utils/colors";

const fechaActual = new Date();

const fechaToUTC = fechaActual.toUTCString();
const year = fechaActual.getUTCFullYear();

console.log(year, " UTC-Format", fechaToUTC);
const { Text } = Typography;

const CustomFooter: React.FC = () => {
  const onClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <Row
      gutter={[8, 8]}
      style={{
        padding: "25px",
        background: secondary,
        borderRadius: "1em",
        justifyContent: "",
        alignContent: "center",
      }}
    >
      <Col xs={24} md={8} lg={8} xl={8} xxl={8}>
        <Space direction="vertical">
          <Text style={{ color: white }} strong>
            Dirección:
          </Text>
          <Text style={{ color: white }}>
            <Col>
              <EnvironmentOutlined /> {adress}
            </Col>
            <Col>
              {city}{" "}
              <DividerC
                type="vertical"
                style={{ background: `${white}`, color: `${white}` }}
              ></DividerC>{" "}
              {departament}
            </Col>
          </Text>
        </Space>
      </Col>
      <Col xs={24} md={8} lg={8} xl={8} xxl={8}>
        <Space direction="vertical">
          <Text style={{ color: white }} strong>
            Correo Electrónico:
          </Text>
          <Text style={{ color: white }}>
            <MailOutlined /> {email}
          </Text>
          <Text style={{ color: white }} strong>
            Telefono:
          </Text>
          <Text style={{ color: white }}>
            <PhoneFilled rotate={90} /> {phone1} - {phone2}
          </Text>
        </Space>
      </Col>
      <Col xs={24} md={8} lg={8} xl={8} xxl={8}>
        <Space direction="vertical">
          <Text style={{ color: white }} strong>
            Síguenos:
          </Text>
          <Space size="middle">
            {access.map((item, index) => (
              <Button
                style={{ color: secondary, backgroundColor: white }}
                key={index}
                type="link"
                onClick={() => onClick(item.link)}
                icon={item.icon}
              />
            ))}
          </Space>
        </Space>
      </Col>
      <Col sm={24} md={24} lg={24} xxl={24}>
        <Space>
          {" "}
          <Text style={{ color: white, alignContent: "center" }}>
            © {year} {nameCompany} Todos los derechos reservados.
          </Text>
        </Space>
      </Col>
    </Row>
  );
};

export default CustomFooter;
