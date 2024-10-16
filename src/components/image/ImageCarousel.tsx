import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Carousel, Image, Col, Button, Row } from "../../tools/desing";
import {
  carouselContainerStyle,
  carouselImageStyle,
  buttonOverlayStyle,
  buttonHoverStyle, // Nuevo estilo para hover
} from "../../css/gallerystyles";
import { imagesCarouselv2 as images, ObjectImage } from "../../utils/images.ts";

const ImageCarousel: React.FC = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false); // Estado para hover

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <Row justify={"center"} gutter={[16, 16]}>
      <Col>
        <Carousel
          autoplay={true}
          adaptiveHeight={true}
          infinite={true}
          dots={true}
          style={{
            alignContent: "center",
            textAlign: "center",

            ...carouselContainerStyle,
          }}
        >
          {images.map((image: ObjectImage) => (
            <Col key={image.index}>
              <Image
                src={image.src}
                alt={`Image ${image.index + 1}`}
                style={carouselImageStyle}
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
      </Col>
    </Row>
  );
};

export default ImageCarousel;
