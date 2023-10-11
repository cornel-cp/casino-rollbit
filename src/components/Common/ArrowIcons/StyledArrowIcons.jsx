import styled from "styled-components";

export const StyledArrowIcons = styled.div`
  display: flex;
  gap: 6px;
  margin-left: 17px;

  .arrow-style {
    padding: 7px 13px;
    border-radius: 6px;
    background: rgba(203, 215, 255, 0.03);
    cursor: pointer;

    &:hover {
      background: rgba(203, 215, 255, 0.055);
    }
  }
`;
