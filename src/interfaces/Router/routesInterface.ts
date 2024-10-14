import { ReactNode } from "react";

export default interface routeinterface {
  id: number;
  path: string | string[];
  element: ReactNode;
  visible: boolean;
  name: string;
}
