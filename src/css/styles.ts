import { Colors } from "../utils/colors";
const { secondary, white } = Colors;

export const headerLayoutStyle = {
  minWidth: "412px ",
  position: "sticky" as "sticky",
  top: 0,
  zIndex: 1,
  width: "100%",
  background: white,
  borderBottom: `2px solid ${secondary}`,
};

export const contentLayoutStyle = {
  minHeight: "auto",
  background: `${white}`,
  padding: "24px",
  color: `${secondary}`,
  minWidth: "411px",
};

export const footerLayoutStyle = {
  padding: "20px",
  borderRadius: "1em",
  minWidth: "411px",
  backgroundcolor: white,
};
