import React, { useState } from "react";
import {
  Drawer,
  Button,
  Menu,
  MenuOutlined,
  Avatar,
  Typography,
  Row,
  Col,
} from "../../antd/antdComponents";
import propsMenu from "../../../interfaces/propsInterface";
import Routers from "../../../config/navigation/Routes";
import SvgIcon from "../../../assests/Logo.svg";
import { titleEnterprise } from "../../../assests/titleEnterprise";

const { Title } = Typography;

const NavBarMobile: React.FC<propsMenu> = ({ navigate }) => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Row>
        <Col span={8}>
          <Button
            className="Button-Menu"
            onClick={showDrawer}
            icon={<MenuOutlined />}
          ></Button>
        </Col>
        <Col span={8}>
          <Avatar
            src={<img src={SvgIcon} onClick={() => navigate("/")} />}
            alt="Custom Icon"
          ></Avatar>
        </Col>
        <Col span={8}>
          {" "}
          <Title level={5}>{titleEnterprise}</Title>
        </Col>{" "}
      </Row>
      <Drawer
        title={
          <Row>
            <Avatar
              src={<img src={SvgIcon} />}
              onClick={() => navigate("/")}
              alt="Custom Icon"
            ></Avatar>
            <Title level={5}>{titleEnterprise}</Title>
          </Row>
        }
        placement="left"
        closable={true}
        onClose={onClose}
        visible={visible}
      >
        <Menu mode="vertical">
          {/* <Menu.Item key="0" onClick={() => navigate("/home")}></Menu.Item>

          <Menu.Item key="1" onClick={() => navigate("/home")}>
            INCOL NPG
          </Menu.Item> */}

          {Routers().map(
            (e) =>
              e.open && (
                <Menu.Item key={e.id} onClick={() => navigate(e.path)}>
                  {e.name}
                </Menu.Item>
              )
          )}
        </Menu>
      </Drawer>
    </>
  );
};

export default NavBarMobile;
