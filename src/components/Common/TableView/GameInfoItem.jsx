import React from "react";
import IMG3 from "../../../assets/images/IMAGE (12).png";
import IMG2 from "../../../assets/images/IMAGE (32).png";
import { StyleGameItem } from "./styles";

const GameInfoItem = ({ gameInfo, index, uniqueKey }) => {
  const { name, player, time, bet, multiplier, payout } = gameInfo;

  return (
    <StyleGameItem index={index} key={uniqueKey}>
      <td class="game">
        <div>
          <a href="/game/pragmaticexternal:FruitParty1">
            <div class="game-icon">
              <img src={IMG2} alt="Fruit Party" />
            </div>
          </a>
          <a
            href="/game/pragmaticexternal:FruitParty1"
            style={{ color: "rgb(255, 255, 255)" }}
          >
            {name}
          </a>
        </div>
      </td>
      <td class="player">
        <div>
          <div class="icon-name" size="14">
            <div size="21" class="icon">
              <img src={IMG3} alt="Platinum 1" scale="0.72" />
            </div>
            <div class="name" style={{ color: "white", fontWeight: "500" }}>
              {player}
            </div>
          </div>
        </div>
      </td>
      <td class="table-value">
        <div>{time}s</div>
      </td>
      <td class="table-value">
        <div>${bet}</div>
      </td>
      <td class="table-value">
        <div>
          <span>{multiplier}x</span>
        </div>
      </td>
      <td class="table-value">
        <div>
          <span>${payout}</span>
        </div>
      </td>
      {/* {index !== data.length - 1 && <div className="spacer" />} */}
    </StyleGameItem>
  );
};

export default GameInfoItem;
