import React, { useState } from "react";
import { useNavigate } from "react-router";
import type { NavigateFunction } from "react-router-dom";
import {
  Row,
  Col,
  Button,
  Avatar,
  Drawer,
  Grid,
  Typography,
} from "../../tools/desing";
import { secondary } from "../../../src/utils/colors";
import { DividerC as Divider } from "../antd/DividerC";
import { MenuFoldOutlined } from "../../tools/icon";
import Routers from "../../config/Router";
import SvgIcon from "../../assests/Logo.svg";
import { titleEnterprise } from "../../constants";
import { colorSecondary as styleColorS } from "../../css/styles";
const { useBreakpoint } = Grid;
const { Text } = Typography;

const NavBar: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();
  const [stateOpen, setStateOpen] = useState(false);
  const screens = useBreakpoint();

  return (
    <Row
      style={{
        position: "sticky",
        borderRadius: "50px ",
        borderColor: "black",
      }}
    >
      {screens.sm || screens.md ? (
        <>
          <Col span={8} style={{ color: `${secondary}` }}>
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
              <Text>{titleEnterprise}</Text>
            </Button>
          </Col>
          {Routers().map((router) => (
            <>
              {router.visible === true && (
                <Col span={8} style={{ textAlign: "end" }}>
                  <Button
                    type="link"
                    onClick={() => navigate(router.path)}
                    style={{ color: `${secondary}` }}
                  >
                    {router.name}
                  </Button>
                </Col>
              )}
            </>
          ))}
        </>
      ) : (
        <>
          {" "}
          <Col span={12} style={{ color: `${secondary}` }}>
            <Avatar
              src={<img src={SvgIcon} onClick={() => navigate("/")} />}
              alt="Custom Icon"
            ></Avatar>
            <Divider />
            {titleEnterprise}
          </Col>
          <Col span={12} style={{ textAlign: "end", color: `${secondary}` }}>
            <Button type="link" onClick={() => setStateOpen(true)}>
              <MenuFoldOutlined style={styleColorS} />
            </Button>
          </Col>
        </>
      )}

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
              {titleEnterprise}
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
