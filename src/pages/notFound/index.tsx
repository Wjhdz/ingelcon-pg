import React from "react";
import { useNavigate } from "react-router";
import type { NavigateFunction } from "react-router-dom";
import { Row, Col, Button, Result, Layout } from "../../tools/desing";
import { ApiOutlined } from "../../tools/icon";
import { secondary, white } from "../../utils/colors";
// import

const { Content } = Layout;
const NotFound: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();
  return (
    <Content
      style={{
        height: "100vh",
        backgroundColor: `${white}`,
        color: `${secondary}`,
      }}
    >
      <Row justify="center">
        <Col xs={24} lg={24}>
          <Result
            style={{ color: `${secondary}` }}
            title="404"
            icon={<ApiOutlined style={{ color: `${secondary}` }} />}
            subTitle="Lo sentimos, la Pagina que buscas no está disponible"
            extra={
              <Button
                style={{ backgroundColor: `${secondary}` }}
                type="primary"
                onClick={() => navigate("/")}
              >
                Back Home
              </Button>
            }
          />
        </Col>
      </Row>
    </Content>
  );
};

export default NotFound;
