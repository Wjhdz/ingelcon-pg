import React from "react";
import { useNavigate } from "react-router";
import type { NavigateFunction } from "react-router-dom";
import { Row, Col, Button, Typography, Layout } from "../../tools/desing";
import { ApiOutlined } from "../../tools/icon";
import { secondary, white } from "../../utils/colors";

const { Content } = Layout;
const { Text } = Typography;

const NotFound: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();
  
  return (
    <Content
      style={{
        backgroundColor: `${white}`,
        color: `${secondary}`,
        minHeight: "100vh", // Asegura que el contenedor ocupe toda la altura de la pantalla
        display: "flex",
        justifyContent: "center", // Centrado horizontal del contenido
        alignItems: "center",     // Centrado vertical del contenido
      }}
    >
      <Row justify="center" align="middle" gutter={[16, 16]}>
        <Col xs={24} lg={24} style={{ textAlign: "center" }}> {/* Centrado del ícono */}
          <ApiOutlined style={{ fontSize: "150px" }} />
          
        </Col>
        <Col xs={24} lg={24} style={{textAlign:"center"}}><Text >La pagina que busca no está disponible</Text></Col>
        <Col xs={24} lg={24} style={{ textAlign: "center" }}> {/* Centrado del botón */}
          <Button
            style={{ backgroundColor: `${secondary}` }}
            type="primary"
            onClick={() => navigate("/")}
          >
            Back Home
          </Button>
          
        </Col>
      </Row>
    </Content>
  );
};

export default NotFound;
