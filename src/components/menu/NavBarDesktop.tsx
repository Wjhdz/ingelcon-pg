import React, { useState } from "react";
import { Row, Col, Button, Avatar, Drawer } from "antd";
import Routers from "../../config/Router";
import { useNavigate } from "react-router";
import type { NavigateFunction } from "react-router-dom";
import SvgIcon from "../../assests/Logo.svg";

const NavBarDesktop: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();
  const [stateOpen, setStateOpen] = useState(false);

  return (
    <Row gutter={[8, 8]} justify="center">
      <Col xs={22} md={6}>
        <Avatar
          src={<img src={SvgIcon} onClick={() => navigate("/")} />}
          alt="Custom Icon"
        ></Avatar>
      </Col>
      {Routers().map((router) => (
        <>
          {router.visible === true && (
            <Col xs={0} md={6}>
              <Button type="link">{router.name}</Button>
            </Col>
          )}
        </>
      ))}

      <Col xs={2} md={0}>
        <Button type="link" onClick={() => setStateOpen(true)}>
          Open
        </Button>
      </Col>

      <Drawer
        title={<Avatar src={<img src={SvgIcon} />} alt="Custom Icon"></Avatar>}
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
                  <Button type="link">{router.name}</Button>
                </Col>
              )}
            </>
          ))}
        </Row>
      </Drawer>
    </Row>
  );
};

export default NavBarDesktop;
