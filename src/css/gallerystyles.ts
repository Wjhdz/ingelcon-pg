import { secondary, white } from "../utils/colors";
// galleryStyles.ts

export const carouselContainerStyle: React.CSSProperties = {
  margin: "10px ",
  padding: "20px",
  backgroundColor: secondary,
  borderRadius: "8px",
};

export const carouselImageStyle: React.CSSProperties = {
  borderRadius: "8px",
  height: "400px", // Ajusta esta altura según tus necesidades
};

// Estilo base del botón
export const buttonOverlayStyle: React.CSSProperties = {
  position: "absolute",
  bottom: "20px",
  left: "50%",
  transform: "translateX(-50%)",
  backgroundColor: secondary,
  color: white,
  padding: "10px 20px",
  borderRadius: "8px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  zIndex: 10,
  transition: "all 0.3s ease", // Para transiciones suaves
};

// Estilo del botón en hover
export const buttonHoverStyle: React.CSSProperties = {
  backgroundColor: secondary, // Cambia el color de fondo al hover
  transform: "translateX(-50%) scale(1.1)", // Agranda el botón un poco
  boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)", // Más sombra para profundidad
};
