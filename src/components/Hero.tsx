import React from "react";
import { Typography, Button, Col } from "../tools/desing";
import { Colors } from "../utils/colors";
import { InfoCompany } from "../constants";

const image =
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
const { nameCompany, slogan } = InfoCompany;
const { secondary, white } = Colors;
const { Title, Paragraph } = Typography;
const Hero: React.FC = () => {
  return (
    <Col
      style={{
        padding: "100px 15px",
        textAlign: "center",
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "10px",
      }}
    >
      {" "}
      {/* nameCompany.split(" S.A.S.")[0] */}
      <Title className="" style={{ color: white }}>
        {nameCompany.split(" S.A.S.")[0]}
      </Title>
      <Paragraph style={{ color: white, fontSize: "1.2em" }}>
        {slogan}
      </Paragraph>
      <Button
        type="primary"
        size="large"
        style={{
          marginTop: "20px",
          background: secondary,
          borderColor: secondary,
        }}
      >
        Contáctanos
      </Button>
    </Col>
  );
};

export default Hero;
