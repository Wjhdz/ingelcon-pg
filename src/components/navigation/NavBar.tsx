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
import { Colors } from "../../../src/utils/colors";
import { DividerC as Divider } from "../antd/DividerC";
import { MenuFoldOutlined } from "../../tools/icon";
import Routers from "../../config/Router";
import SvgIcon from "../../assests/Logo.svg";
import { InfoCompany } from "../../constants";
import { colorSecondary as styleColorS } from "../../css/styles";
const { nameCompany } = InfoCompany;
const { secondary } = Colors;
const { Text } = Typography;

const NavBar: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();
  const [stateOpen, setStateOpen] = useState(false);

  return (
    <Row>
      <Col xs={12} md={12} lg={6} xl={6} style={{ color: `${secondary}` }}>
        <Avatar
          src={<img src={SvgIcon} onClick={() => navigate("/")} />}
          alt="Custom Icon"
        ></Avatar>
        <Divider />
        <Button
          type="link"
          onClick={() => navigate("/")}
          style={{ paddingInlineStart: "2px", color: `${secondary}` }}
        >
          <Text style={{ color: secondary }}>{nameCompany}</Text>
        </Button>
      </Col>
      <Col
        xs={12}
        md={12}
        lg={0}
        xl={0}
        style={{ textAlign: "end", color: `${secondary}` }}
      >
        <Button type="link" onClick={() => setStateOpen(true)}>
          <MenuFoldOutlined style={styleColorS} />
        </Button>
      </Col>
      {Routers().map((router) => (
        <>
          {router.visible === true && (
            <Col xs={0} md={0} lg={6} xl={6} style={{ textAlign: "end" }}>
              <Button
                type="link"
                onClick={() =>
                  navigate(
                    Array.isArray(router.path) ? router.path[0] : router.path
                  )
                }
                style={{ color: `${secondary}` }}
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
            <Col style={{ color: `${secondary}` }}>
              <Avatar
                src={<img src={SvgIcon} />}
                onClick={() => navigate("/")}
                alt="Custom Icon"
              ></Avatar>
              <Divider />
              {nameCompany}
            </Col>
          </Row>
        }
        placement="left"
        closable={false}
        onClose={() => setStateOpen(false)}
        open={stateOpen}
        width={"280px"}
      >
        <Row gutter={[8, 8]}>
          {Routers().map((router) => (
            <>
              {router.visible === true && (
                <Col span={24}>
                  <Button
                    type="link"
                    onClick={() => navigate(router.path)}
                    style={styleColorS}
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
