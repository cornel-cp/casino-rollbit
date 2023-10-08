import React from "react";
import { StyledHoverableImage } from "./styles";

const HoverableImage = ({ src, alt }) => {
  return (
    <StyledHoverableImage>
      <img src={src} alt={alt} className="image-card" />
    </StyledHoverableImage>
  );
};

export default HoverableImage;
