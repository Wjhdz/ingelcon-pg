import React from "react";
import { Divider } from "../../tools/desing";
import { Colors } from "../../utils/colors";
const { secondary } = Colors;

export const DividerC: React.FC = () => {
  return (
    <Divider
      style={{ background: `${secondary}`, color: `${secondary}` }}
      type="vertical"
    />
  );
};
