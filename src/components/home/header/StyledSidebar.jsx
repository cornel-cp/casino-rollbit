import styled from "styled-components";

export const StyledOpenedSidebar = styled.div`
  width: 240px;
  flex: 0 0 auto;
  background: #1a1d29;
  position: sticky;
  top: 65px;
  left: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 730px;
  padding: 20px 16px;
  scroll-padding-top: 9rem;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.3);

  /* Define the common styles */

  .other-text {
    color: #686d7b;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14.4px;
    display: flex;
    margin-block: 12px;
  }

  .other-section {
    display: flex;
    flex-direction: column;
  }

  .option-sidebar {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-size: 14px;
    height: 40px;
    min-height: 40px;
    border-radius: 8px;
    color: rgb(255, 255, 255);
    transition: all 0.1s ease 0s;
    font-family: "Geogrotesque Wide", sans-serif;
    font-weight: 500;
    font-style: normal;
    cursor: pointer;
    user-select: none;
  }

  .icon-img {
    display: flex;
    justify-content: center;
    width: 36px;
    min-width: 36px;
    height: 20px;
    margin-right: 2px;
  }

  .icon-arrow {
    width: 30px;
    height: 30px;
  }

  .info-text {
    width: 100%;
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16.8px;
  }

  .info-number {
    width: 46px;
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16.8px;
  }

  .count {
    width: 14px;
    color: #b1b6c6;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 13.2px;
  }

  &::-webkit-scrollbar {
    width: 0.6rem;
  }

  &::-webkit-scrollbar-track {
    background: #1a1d29;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background: rgba(203, 215, 255, 0.08);
  }
`;
