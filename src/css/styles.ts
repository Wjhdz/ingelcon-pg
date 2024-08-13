import { secondary, white } from "../utils/colors";

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

export const colorSecondary = { color: `${secondary}` };

export const colorWhite = { color: `${white}` };

export const backgroundColorWhite = { background: `${white}` };

export const colorSecondaryAndWhite = {
  ...colorWhite,
  background: `${secondary}`,
};
