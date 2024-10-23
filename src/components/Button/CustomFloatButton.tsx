import React from "react";
import { FloatButton } from "../../tools/desing";
import { WhatsAppOutlined } from "../../tools/icon";
import { networksLinks } from "../../constants";
import { Colors } from "../../utils/colors";
const { whatsappColor } = Colors;
const { whatsapp } = networksLinks;
const CustomFloatButton: React.FC = () => {
  const onClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <FloatButton
      tooltip={<div>Chat de Whastapp</div>}
      icon={<WhatsAppOutlined style={{ color: whatsappColor }} />}
      onClick={() => onClick(whatsapp)}
    />
  );
};

export default CustomFloatButton;
