import React from "react";
import { Divider } from "../../tools/desing";
import type { DividerProps } from "../../tools/desing";

export const DividerC: React.FC<DividerProps> = (DividerProps) => {
  return <Divider {...DividerProps} />;
};
