import React from "react";
import { StyledStepSection } from "./StyledStepSection";

const StepsSection = ({ steps }) => {
  return (
    <StyledStepSection style={{ paddingTop: "0px", paddingBottom: "0px" }}>
      <div class="class-1">
        <div class="class-2">
          {steps.map((step) => (
            <div class="step-account">
              <div class="step-content">
                <div class="step-number">{step.number}</div> {step.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledStepSection>
  );
};

export default StepsSection;
