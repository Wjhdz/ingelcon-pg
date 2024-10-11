import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Carousel, Image, Col, Grid, Button } from "../../../tools/desing.ts";
import {
  carouselContainerStyle,
  carouselImageStyle,
  halfCarouselImageStyle,
  buttonOverlayStyle,
  buttonHoverStyle, // Nuevo estilo para hover
} from "../../../css/gallerystyles.ts";
import {
  imagesCarouselv2 as images,
  ObjectImage,
} from "../../../utils/images.ts";

const { useBreakpoint } = Grid;

const ImageCarousel: React.FC = () => {
  const navigate = useNavigate();
  const screens = useBreakpoint();
  const [isHovered, setIsHovered] = useState(false); // Estado para hover

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <Carousel
      autoplay={true}
      adaptiveHeight={true}
      infinite={true}
      dots={true}
      style={{
        alignContent: "center",
        textAlign: "center",
        position: "relative",
        ...carouselContainerStyle,
      }}
    >
      {images.map((image: ObjectImage) => (
        <Col key={image.index}>
          <Image
            src={image.src}
            alt={`Image ${image.index + 1}`}
            style={
              screens.sm || screens.md
                ? carouselImageStyle
                : halfCarouselImageStyle
            }
            preview={false}
          />
          <Button
            type="primary"
            style={{
              ...buttonOverlayStyle,
              ...(isHovered ? buttonHoverStyle : {}),
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigate(image.link)}
          >
            Ver más
          </Button>
        </Col>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
