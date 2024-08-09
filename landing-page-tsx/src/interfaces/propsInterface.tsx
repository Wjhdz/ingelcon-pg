import { ReactNode } from "react";
import { NavigateFunction } from "react-router-dom";

export default interface propsMenu {
  navigate: NavigateFunction;
}

export default interface childrenprops {
  children: ReactNode;
}
