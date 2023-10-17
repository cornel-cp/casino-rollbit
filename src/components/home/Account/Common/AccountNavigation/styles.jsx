import styled from "styled-components";

export const StyleAccountNavigation = styled.div`
  .nav-link {
    display: flex;
    margin: 8px 0;
    width: 165px;
    padding: 10px 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border-radius: 8px;
    background: rgba(203, 215, 255, 0.03);

    &:hover {
      background: rgba(203, 215, 255, 0.075);
    }
  }

  .active-link {
    background: rgba(203, 215, 255, 0.075);
  }

  .nav-item p {
    display: flex;
  }

  .nav-icon {
    width: 19px;
    height: 19px;
    color: #b1b6c6;
  }

  .nav-text {
    color: #fff;
    font-size: 14px;
    margin: 0 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 16.8px;
  }

  .active {
    color: rgb(255, 255, 193);
    text-shadow: rgb(255, 93, 0) 0px 0px 8px;
  }

  .active-icon {
    filter: drop-shadow(rgb(255, 93, 0) 0px 0px 6px);
    color: rgb(255, 255, 193);
  }
`;
