import styled from "styled-components";

export const StyledSlider = styled.div`
  display: flex;
  overflow-y: auto;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }

  width: 100%;
  margin-top: 20px;
  gap: 10px;
`;
