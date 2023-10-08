import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  transition: all 0.1s ease 0s;
  appearance: none;
  border: none;
  letter-spacing: 0.5px;
  cursor: pointer;
  user-select: none;
  height: 40px;
  padding: 0px 20px;
  border-radius: 8px;

  font-weight: 800;
  font-style: normal;
  font-size: 14px;
  text-transform: uppercase;
  color: rgb(255, 255, 255);
  background: rgba(203, 215, 255, 0.075);
`;

export const StyledFilterButtonGroup = styled.div`
  .btn-container {
    display: flex;
    flex-direction: row;
    gap: 5px;
  }

  .button {
    display: flex;
    width: auto;
    height: 24px;
    padding: 4px 9px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;

    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14.4px;

    color: #686d7b;

    &:hover {
      background: rgba(203, 215, 255, 0.03);
    }
  }

  .btn-active {
    background: rgba(203, 215, 255, 0.03);
    color: #fff;
  }
`;
