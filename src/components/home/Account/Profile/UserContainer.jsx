import React from "react";
import { StyledUserContainer } from "./styles";

const UserContainer = () => {
  return (
    <StyledUserContainer>
      <div size="70" class="rank-logo">
        <img
          src="https://rollbit.com/static/media/norank.8003392e3283ce4fb509.png"
          alt=""
          scale="0.96"
        />
      </div>
      <div class="user-info-container">
        <div class="user-name">TirlaP</div>
        <div color="#E5A480" class="progress-bar"></div>
        <div class="level-container">
          <div class="level-section">
            <span class="rank-info">Unranked</span>
          </div>
          <div class="level-section">
            <span class="rank-info">Next:</span>
            <div size="24" class="rank-small-logo">
              <img
                src="https://rollbit.com/static/media/Icon%201%20(bronze).bf32a24f82022f74e1b1.png"
                alt="Bronze 1"
                scale="0.72"
              />
            </div>
            <div color="#E5A480" class="rank-title">
              Bronze 1
            </div>
            <span class="rank-info">$10,000</span>
          </div>
        </div>
      </div>
    </StyledUserContainer>
  );
};

export default UserContainer;
