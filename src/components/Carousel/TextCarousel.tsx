import React from "react";
import { Typography, Carousel } from "../../tools/desing";
import { secondary, white } from "../../utils/colors";
import { textcontent, ObjectText } from "../../constants";
const { Text } = Typography;
const TickerCarousel: React.FC = () => {
  return (
    <Carousel
      autoplay
      autoplaySpeed={1000} // Velocidad de desplazamiento
      dots={false} // Sin puntos de navegación
      style={{
        height: "24px",
        width: "100%",
        alignContent: "center",
        textAlign: "center",
        whiteSpace: "nowrap", // Mantener el texto en una sola línea
        overflow: "hidden",
        backgroundColor: secondary, // Fondo como un letrero electrónico
      }}
    >
      <div>
        {textcontent.map((Otext: ObjectText) => (
          <Text style={{ color: white }} key={Otext.index}>
            {Otext.text}
          </Text>
        ))}{" "}
      </div>
    </Carousel>
  );
};

export default TickerCarousel;
