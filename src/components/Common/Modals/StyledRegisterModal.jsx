import styled from "styled-components";

export const StyledRegisterModal = styled.div`
  .register-button {
    display: flex;
    padding: 10px 20px;
    align-items: flex-start;
    gap: 10px;
    border-radius: 8px;
    background: #ffe81a;
    box-shadow: 0px 0px 10px 0px rgba(255, 176, 25, 0.4);
    color: #141722;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16.8px;
    letter-spacing: 0.5px;

    &:hover {
      filter: brightness(110%);
    }
  }
`;
