import styled from "styled-components";

export const StyledSwitch = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  .switch {
    top: 0px;
    left: 0px;
    height: 16px;
    width: 32px;
    background: rgba(203, 215, 255, 0.2);
  }

  .circle {
    width: 12px;
    height: 12px;
    background: rgb(16, 18, 27);
    margin-left: 1px;
    margin-top: 1px;
  }

  .label-checkbox {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    height: 16px;
    margin: 0px;
    cursor: pointer;
    white-space: nowrap;
    color: rgb(177, 182, 198);
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
  }

  .label-input {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    height: 18px;
    margin: 0px;
    cursor: pointer;
    text-transform: uppercase;
    white-space: nowrap;
    color: rgb(177, 182, 198);
    font-size: 13px;
    font-weight: 800;
    font-style: normal;
  }

  .square {
    content: "";
    top: 0px;
    left: 0px;
    height: 18px;
    width: 18px;
    border: 1px solid rgb(48, 53, 69);
    border-radius: 4px;
    background: rgb(16, 18, 27);
  }
  svg {
    fill: currentcolor;
    width: 11px;
    min-width: 11px;
    height: auto;
    position: absolute;
    top: 4px;
    left: 3px;
    color: rgb(16, 18, 27);
  }
`;
