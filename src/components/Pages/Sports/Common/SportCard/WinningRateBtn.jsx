import React from "react";

const WinningRateBtn = ({ option, rate }) => {
  return (
    <div className="btn-sport">
      <div className="text-btn">{option}</div>
      <div className="number-btn">{rate}</div>
    </div>
  );
};

export default WinningRateBtn;
