import styled from "styled-components";
import ARROW_HOME from "../../../assets/images/IMAGE (1).png";

export const StyledStepAccount = styled.div`
  background-image: url(${ARROW_HOME});
  background-repeat: no-repeat;
  background-size: contain;
  width: 300px;
  height: 56px;

  display: flex;
  align-items: center;

  .step-text {
    display: flex;
    gap: 10px;
    margin-left: 60px;
    display: flex;
    align-items: center;
  }

  .step-number {
    color: #ffffc1;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
  }

  .step-name {
    color: #b1b6c6;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
  }
`;
