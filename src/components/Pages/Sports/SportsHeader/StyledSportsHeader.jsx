import styled from "styled-components";

export const StyledSportsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  gap: 10px;

  background: #2b2e3b;

  .navigation-options {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 16px;
    width: 100%;
  }

  .navigation-actions {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }
`;

export const StyledSportNavOption = styled.div`
  color: ${({ isActive }) =>
    isActive ? "rgb(255, 232, 26)" : "rgb(177, 182, 198)"};
  width: 32px;
  height: 32px;
  display: flex;
  position: relative;
  align-items: center;
  border-radius: 6px;
  flex-direction: column;
  justify-content: center;

  svg {
    width: auto;
    height: 32px;
  }
`;
