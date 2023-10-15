import React from "react";
import { StyleStats } from "./styles";

const statsData = [
  { title: "Profit Share", value: "$14.61" },
  { title: "Max Free Bet", value: "$50" },
  { title: "Max Combo Boost", value: "109%" },
];

const Stats = () => {
  return (
    <StyleStats>
      {statsData.map((stat, index) => (
        <div className="stat-container">
          <div className="title">{stat.title}</div>
          <div className="value-container">
            <div className="value">{stat.value}</div>
          </div>
        </div>
      ))}
    </StyleStats>
  );
};

export default Stats;
