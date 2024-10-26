import { Colors } from "../utils/colors";
const { secondary, white } = Colors;

export const colorSecondary = { color: `${secondary}` };

export const colorWhite = { color: `${white}` };

export const backgroundColorWhite = { background: `${white}` };

export const colorSecondaryAndWhite = {
  ...colorWhite,
  background: `${secondary}`,
};

export const card = {
  padding: "10px",
  margin: "10px",
  borderRadius: "10px",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
};

export const rows = {
  ...card,
  display: "flex",
};

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
  ...backgroundColorWhite,
};
