import React from "react";
import { Menu, Avatar, Col, Row } from "../../antd/antdComponents";
import propsMenu from "../../../interfaces/propsInterface";
import Routers from "../../../config/navigation/Routes";
import SvgIcon from "../../../assests/Logo.svg";
import { titleEnterprise } from "../../../assests/titleEnterprise";
import "../../../css/menu/colorStyleMenu.css";

const NavBarDesktop: React.FC<propsMenu> = ({ navigate }) => {
  return (
    <>
      <Menu className="Element-Menu" mode={"horizontal"}>
        <Row>
          <Col>
            <Menu.Item key="0" onClick={() => navigate("/home")}>
              <Avatar
                src={<img src={SvgIcon} onClick={() => navigate("/")} />}
                alt="Custom Icon"
              ></Avatar>
            </Menu.Item>
          </Col>
          <Col>
            {" "}
            <Menu.Item key="1" onClick={() => navigate("/home")}>
              {titleEnterprise}
            </Menu.Item>
          </Col>
          <Col>
            {Routers().map(
              (e) =>
                e.open && (
                  <Menu.Item key={e.id} onClick={() => navigate(e.path)}>
                    {e.name}
                  </Menu.Item>
                )
            )}
          </Col>
        </Row>
      </Menu>
    </>
  );
};

export default NavBarDesktop;
