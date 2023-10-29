import styled from "styled-components";

export const StyledExtendedCard = styled.div`
  position: relative;

  .first-container {
    max-height: 302px;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
      scrollbar-width: none;
    }
  }

  .simplebar-wrapper {
    overflow: hidden;
    width: inherit;
    height: inherit;
    max-width: inherit;
    max-height: inherit;
  }

  .simplebar-height-auto-observer-wrapper {
    box-sizing: inherit !important;
    height: 100%;
    width: 100%;
    max-width: 1px;
    position: relative;
    float: left;
    max-height: 1px;
    overflow: hidden;
    z-index: -1;
    padding: 0;
    margin: 0;
    pointer-events: none;
    flex-grow: inherit;
    flex-shrink: 0;
    flex-basis: 0;
  }

  .simplebar-mask {
    direction: inherit;
    position: absolute;
    overflow: hidden;
    padding: 0;
    margin: 0;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: auto !important;
    height: auto !important;
    z-index: 0;
  }

  .simplebar-offset {
    direction: inherit !important;
    box-sizing: inherit !important;
    resize: none !important;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 0;
    margin: 0;
    -webkit-overflow-scrolling: touch;
  }

  .simplebar-content-wrapper {
    direction: inherit;
    box-sizing: border-box !important;
    position: relative;
    display: block;
    height: 100%;
    width: auto;
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
      scrollbar-width: none;
    }
  }

  .simplebar-content:after,
  .simplebar-content:before {
    content: " ";
    display: table;
  }

  .last-class {
    padding-bottom: 8px;
  }

  .bt528 {
    margin-top: 16px;
    text-align: left;
    padding-left: 8px;
    margin-bottom: 8px;
  }
  .bt521 {
    color: #ffffff;
    margin: 0;
    z-index: 4;
    position: relative;
    box-sizing: border-box;
    text-align: center;
    font-weight: 600;
  }
  .bt527 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 8px;
  }

  .bt522 .bt523 {
    -webkit-mask-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 80%,
      rgba(0, 0, 0, 0) 100%
    );
  }

  .bt523 {
    width: 100%;
    height: 16px;
    opacity: 0.5;
    overflow: hidden;
    font-size: 12px;
    box-sizing: border-box;
    line-height: 16px;
    border-radius: 2px;
  }

  .team-odds {
    flex: 1;
    position: relative;
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
`;
