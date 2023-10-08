import React from "react";
import { StyledStepAccount } from "./StyledStepAccount";

const StepAccount = ({ stepNumber, stepName }) => {
  return (
    <StyledStepAccount>
      <div className="step-text">
        <p className="step-number">{stepNumber}</p>
        <span className="step-name">{stepName}</span>
      </div>
    </StyledStepAccount>
  );
};

export default StepAccount;
