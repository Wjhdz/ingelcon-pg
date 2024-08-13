import React, { useState } from "react";
import { useNavigate } from "react-router";
import type { NavigateFunction } from "react-router-dom";
import {
  Row,
  Col,
  Button,
  Avatar,
  Drawer,
  Typography,
} from "../../tools/desing";
import { MenuFoldOutlined } from "../../tools/icon";
import Routers from "../../config/Router";
import SvgIcon from "../../assests/Logo.svg";
import { titleEnterprise } from "../../constants";
import { colorSecondary } from "../../css/styles";
const { Text } = Typography;

const NavBar: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();
  const [stateOpen, setStateOpen] = useState(false);

  return (
    <Row justify="center">
      <Col xs={8} md={6}>
        <Avatar
          src={<img src={SvgIcon} onClick={() => navigate("/")} />}
          alt="Custom Icon"
        ></Avatar>
      </Col>

      <Col xs={8} md={6} style={colorSecondary} onClick={() => navigate("/")}>
        {" "}
        {titleEnterprise}
      </Col>

      <Col xs={8} md={0}>
        <Button type="link" onClick={() => setStateOpen(true)}>
          <MenuFoldOutlined style={colorSecondary} />
        </Button>
      </Col>

      {Routers().map((router) => (
        <>
          {router.visible === true && (
            <Col xs={0} md={6}>
              <Button
                type="link"
                onClick={() => navigate(router.path)}
                style={colorSecondary}
              >
                {router.name}
              </Button>
            </Col>
          )}
        </>
      ))}

      <Drawer
        title={
          <Row gutter={[6, 6]}>
            <Col>
              <Avatar
                src={<img src={SvgIcon} />}
                onClick={() => navigate("/")}
                alt="Custom Icon"
              ></Avatar>
              <Text style={colorSecondary}>{titleEnterprise}</Text>
            </Col>
          </Row>
        }
        placement="left"
        closable={false}
        onClose={() => setStateOpen(false)}
        open={stateOpen}
      >
        <Row gutter={[8, 8]}>
          {Routers().map((router) => (
            <>
              {router.visible === true && (
                <Col xs={24}>
                  <Button
                    type="link"
                    onClick={() => navigate(router.path)}
                    style={colorSecondary}
                  >
                    {router.name}
                  </Button>
                </Col>
              )}
            </>
          ))}
        </Row>
      </Drawer>
    </Row>
  );
};

export default NavBar;
