import React from "react";
import StepAccount from "../../Common/StepAccount/StepAccount";

const StepsSection = () => {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
        marginTop: "24px",
      }}
    >
      <StepAccount stepNumber={"01"} stepName={"Register Account"} />
      <StepAccount stepNumber={"02"} stepName={"Make a Deposit and Play"} />
      <StepAccount stepNumber={"03"} stepName={"Receive Rewards"} />
    </div>
  );
};

export default StepsSection;
