import { ReactNode } from "react";

export default interface routeinterface {
  id: number;
  path: string;
  element: ReactNode;
  open: boolean;
  name: string;
}
