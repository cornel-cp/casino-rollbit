import styled from "styled-components";

export const StyledChatBoxContainer = styled.div`
  width: 340px;
  height: calc(100vh - 64px);
  padding: 0px 16px 16px;
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  top: 64px;
  background: #1f2330;
  z-index: 8;

  svg {
    color: #b1b6c6;
  }

  .top-actions-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-block: 10px;
    gap: 10px;
  }

  .chat-trades {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .switch-icon {
    width: 9px;
    height: 14px;
  }

  .trades-text {
    width: 46px;
    color: #b1b6c6;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14.4px;
    text-transform: uppercase;
  }

  .arrow-icon {
    width: 7px;
    height: 5px;
  }
`;

export const ChatContainer = styled.div`
  padding: 7px 10px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(203, 215, 255, 0.03);
  border-radius: 6px;

  img {
    height: 12px;
    width: 11px;
  }

  p {
    width: 30px;
    color: #ffffc1;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14.4px;
    text-transform: uppercase;
  }
`;

export const SwitchContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;

  .collapse-icon {
    width: 22px;
    height: 22px;
    flex-shrink: 0;
  }

  .cross-icon {
    width: 22px;
    height: 22px;
    flex-shrink: 0;
    cursor: pointer;
  }

  .container-buttons {
    display: flex;
    gap: 4px;
  }
`;

export const ImagePart = styled.div`
  display: inline-flex;
  padding: 30px 40px;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: rgba(15, 17, 26, 0.55);
  margin: 0 auto;
  width: 100%;

  p {
    color: #b1b6c6;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 21.6px;
    text-transform: uppercase;
  }
`;

export const MessageInput = styled.input`
  display: flex;
  width: 100%;
  padding: 8px 11px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px;
  background: rgba(15, 17, 26, 0.55);
  margin: 0 auto;
  color: #fff;
  margin-top: auto;
`;

export const StyledIconSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px auto;
  width: 100%;

  & > div {
    display: inline-flex;
    align-items: center;
    gap: 12px;
  }

  img {
    width: 21px;
    height: 20px;
    flex-shrink: 0;
  }

  p {
    width: 37px;
    color: #b1b6c6;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14.4px;
    text-transform: uppercase;
  }

  .emoji {
    width: 21px;
    height: 20px;
    flex-shrink: 0;
  }

  .settings {
    width: 13px;
    height: 13px;
    flex-shrink: 0;
  }

  .info {
    display: flex;
    gap: 6px;
    align-items: center;

    .info-value {
      width: 24px;
      color: #b1b6c6;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 14.4px;
      text-transform: uppercase;
    }

    .send-button {
      display: inline-flex;
      padding: 4px 8px;
      align-items: flex-start;
      gap: 10px;
      border-radius: 6px;
      background: #86f454;
      box-shadow: 0px 0px 10px 0px rgba(118, 255, 25, 0.4);
      cursor: pointer;

      .send-text {
        color: #141722;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 14.4px;
        letter-spacing: 0.5px;
        text-transform: uppercase;
      }
    }
  }
`;
