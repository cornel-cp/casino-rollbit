import styled, { keyframes } from "styled-components";

const fadeAndSlideIn = keyframes`
  0% {
    transform: translateY(10px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const generateAnimationDelayCSS = (startIndex, delayIncrease, elements) => {
  let css = "";
  let delay;
  for (let i = 1; i <= elements; i++) {
    delay = i % 3 === 0 ? i * delayIncrease : delay;
    console.log("delay", delay);
    css += `
      &:nth-of-type(${startIndex}n + ${i}) {
        animation-delay: ${delay}s;
      }
    `;
  }

  return css;
};

export const StyledHoverableImage = styled.div`
  animation: 0.2s ease-out 0s 1 normal backwards running ${fadeAndSlideIn};
  ${generateAnimationDelayCSS(3, 0.02, 100)}

  .image-card {
    display: flex;
    width: 150px;
    height: 210px;
    flex-shrink: 0;
    border-radius: 8px;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-10px);
      cursor: pointer;
    }
  }
`;
