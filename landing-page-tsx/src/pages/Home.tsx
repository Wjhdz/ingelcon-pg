import React from "react";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { Row } from "../components/antd/antdComponents";
import LayoutComponent from "../components/Layout/LayoutComponent";
import "../css/menu/colorStyleMenu.css";

const Home: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <LayoutComponent navigate={navigate}>
      <Row>hOME</Row>
    </LayoutComponent>
  );
};

export default Home;
