import { ReactNode } from "react";

export default interface routeinterface {
  id: number;
  path: string;
  element: ReactNode;
  name: string;
}
