import React from "react";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Layout } from "../antd/antdComponents";
import NavBarDesktop from "../menu/navigationcomponent/NavBarDesktop";
import NavBarMobile from "../menu/navigationcomponent/NavBarMobile";
import CustomFooter from "../footer/Footer";
import childrenprops from "../../interfaces/propsInterface";
import "../../css/menu/colorStyleMenu.css";

const { Content } = Layout;

const Home: React.FC<childrenprops> = ({ children }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const navigate: NavigateFunction = useNavigate();

  return (
    <div className="Layout-Main">
      {isMobile ? (
        <NavBarMobile navigate={navigate} children={undefined}></NavBarMobile>
      ) : (
        <NavBarDesktop navigate={navigate}> </NavBarDesktop>
      )}
      <Content style={{ minHeight: "60vh" }}>{children}</Content>
      <CustomFooter></CustomFooter>
    </div>
  );
};

export default Home;
