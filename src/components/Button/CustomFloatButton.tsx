import React from "react";
import { FloatButton } from "../../tools/desing";
import { WhatsAppOutlined } from "../../tools/icon";
import { whatsappLink } from "../../constants";
const CustomFloatButton: React.FC = () => {
  const onClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <FloatButton
      tooltip={<div>Chat de Whastapp</div>}
      icon={<WhatsAppOutlined style={{ color: "#09c03f" }} />}
      onClick={() => onClick(whatsappLink)}
    />
  );
};

export default CustomFloatButton;
