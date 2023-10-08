import React from "react";
import { StyledSocialMediaButton } from "./StyledSocialMediaButton";

const SocialMediaButton = ({ socialIcon: Icon, socialName }) => {
  return (
    <StyledSocialMediaButton>
      <Icon className="icon-img" style={{ width: "17px", height: "17px" }} />
      <p className="btn-text">{socialName}</p>
    </StyledSocialMediaButton>
  );
};

export default SocialMediaButton;
