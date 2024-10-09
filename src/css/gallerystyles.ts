import { secondary, white } from "../utils/colors";
// galleryStyles.ts

export const carouselContainerStyle: React.CSSProperties = {
  width: "80%",
  margin: "10px auto",
  padding: "20px",
  backgroundColor: secondary,
  borderRadius: "8px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
};

export const carouselImageStyle: React.CSSProperties = {
  objectFit: "cover",
  width: "1000px",
  height: "400px", // Ajusta esta altura según tus necesidades
};

// galleryStyles.ts

export const secondaryColor = "#f39c12"; // Ejemplo de color secundario

// Estilos para la imagen ocupando la mitad
export const halfCarouselImageStyle: React.CSSProperties = {
  width: "100%",
  height: "400px",
  objectFit: "cover",
  borderRadius: "8px",
  alignItems: "center",
  textAlign: "center",
};

// Contenedor para el texto en la mitad del carrusel
export const halfTextContainerStyle: React.CSSProperties = {
  flex: 1,
  padding: "20px",
  backgroundColor: secondaryColor,
  color: white,
  textAlign: "center",
};

// Estilos para el texto superpuesto en la imagen completa
export const overlayTextStyle: React.CSSProperties = {
  position: "absolute",
  bottom: "20px",
  left: "20px",
  color: white,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  padding: "10px 20px",
  borderRadius: "8px",
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
