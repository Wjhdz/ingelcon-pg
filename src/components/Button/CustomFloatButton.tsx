import React from "react";
import { Button, FloatButton } from "../../tools/desing";
import { CustomerServiceOutlined } from "../../tools/icon";
import { btngroup } from "../../constants";
import { Colors } from "../../utils/colors";

const { secondary, white } = Colors;

const CustomFloatButton: React.FC = () => {
  const onclick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <FloatButton.Group
      type="primary"
      trigger="click"
      className=""
      tooltip={<div>Comunicaciones</div>}
      style={{ color: secondary }}
      icon={
        <Button
          className=""
          type="link"
          style={{
            borderRadius: `2px solid ${secondary}`,
            padding: "0",
          }}
        >
          <CustomerServiceOutlined style={{ color: white }} />
        </Button>
      }
    >
      {btngroup.map((item, index) => {
        console.log(index);
        return (
          <FloatButton
            className=""
            type="primary"
            key={index}
            tooltip={<div>{item.tooltip}</div>}
            style={{ border: `1px solid ${white}` }}
            icon={item.icon}
            onClick={() => onclick(item.link)}
          />
        );
      })}
    </FloatButton.Group>
  );
};

export default CustomFloatButton;
