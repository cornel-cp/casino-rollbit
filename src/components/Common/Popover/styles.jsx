import styled from "styled-components";
import { fadeAndSlideIn } from "../HoverableImage/styles";

export const StyledPopover = styled.div`
  z-index: 1000;
  position: fixed;
  max-width: 208px;
  transform: translateZ(0px);
  width: 100%;
  animation: 0.2s ease-out 0s 1 normal both running ${fadeAndSlideIn};

  .container-popover {
    height: 100%;
    border-radius: 6px;
    animation: 0.12s ease-out 0s 1 normal none running animation-1h5r8ub;
    transform: translateZ(0px);
    width: 100%;
    background: rgb(31, 35, 48);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 8px -4px,
      rgba(0, 0, 0, 0.18) 0px 0px 20px 0px,
      rgba(0, 0, 0, 0.35) 0px 40px 34px -16px;
    overflow: hidden auto;
  }

  .title {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    text-transform: uppercase;
    color: rgb(255, 255, 255);
    font-size: 14px;
    margin: 16px 16px 8px;
    font-weight: 800;
    font-style: normal;
  }

  .option {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding-right: 12px;
    font-size: 14px;
    height: 40px;
    min-height: 40px;
    border-radius: 8px;
    transition: all 0.1s ease 0s;
    color: rgb(177, 182, 198);
    font-weight: 500;
    font-style: normal;
    cursor: pointer;
    user-select: none;

    &:hover {
      background: rgba(203, 215, 255, 0.03);
    }

    .icon {
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      width: 36px;
      min-width: 36px;
      margin-right: 2px;

      svg {
        fill: currentcolor;
        width: 20px;
        min-width: 20px;
        height: auto;
      }
    }
  }

  .active-option {
    background: rgba(203, 215, 255, 0.03);
    color: rgb(255, 255, 193);
    text-shadow: rgb(255, 93, 0) 0px 0px 8px;

    svg {
      filter: drop-shadow(rgb(255, 93, 0) 0px 0px 6px);
    }
  }
`;
