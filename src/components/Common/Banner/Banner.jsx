import React from "react";
import { ReactComponent as STEAM } from "../../../assets/images/Frame (22).svg";
import { ReactComponent as TWITCH } from "../../../assets/images/Frame (23).svg";
import { ReactComponent as METAMASK } from "../../../assets/images/Frame (24).svg";
import SocialMediaButton from "../Buttons/SocialMediaButton/SocialMediaButton";

import LOGO from "../../../assets/images/LOGO.svg";
import RegisterModal from "../Modals/RegisterModal";
import { StyledBanner } from "./StyledBanner";

const Banner = () => {
  return (
    <StyledBanner>
      <div className="main-content">
        <img src={LOGO} alt="logo" />
        <p className="main-heading">
          Experience true innovation with the highest rewards program within the
          industry.
        </p>

        <RegisterModal buttonText="REGISTER NOW" modalOption="register" />

        <p className="or-join-with">Or join with</p>

        <div className="social-media-container">
          <SocialMediaButton socialIcon={STEAM} socialName={"Steam"} />
          <SocialMediaButton socialIcon={TWITCH} socialName={"Twitch"} />
          <SocialMediaButton socialIcon={METAMASK} socialName={"Metamask"} />
        </div>
      </div>

      <div className="side-text">
        <p className="leverage-text">1000X LEVERAGE CRYPTO FUTURES</p>
        <p className="small-text">
          Instant execution, 0% slippage, 0% fees on loss
        </p>
      </div>
    </StyledBanner>
  );
};

export default Banner;
