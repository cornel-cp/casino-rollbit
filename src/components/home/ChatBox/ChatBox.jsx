//assets
import { Link } from "react-router-dom";
import MSG from "../../../assets/images/Frame (31).svg";
import SWITCH from "../../../assets/images/Frame (32).svg";
import ARROW_DOWN from "../../../assets/images/Frame (33).svg";
import COLLAPSE from "../../../assets/images/Frame (34).svg";
import CROSS from "../../../assets/images/Frame (35).svg";
import SETTINGS from "../../../assets/images/Frame (36).svg";
import SUPPORT from "../../../assets/images/Frame (65).svg";
import EMOJI from "../../../assets/images/IMAGE (43).png";
import {
  ChatContainer,
  ImagePart,
  MessageInput,
  StyledChatBoxContainer,
  StyledIconSection,
  SwitchContainer,
} from "./styles";

const ChatBox = ({ isChatBox, setIsChatBox }) => {
  return (
    <>
      {isChatBox ? (
        <StyledChatBoxContainer>
          <div className="top-actions-container">
            <div className="chat-trades">
              <ChatContainer>
                <img src={MSG} alt="Chat" />
                <p>Chat</p>
              </ChatContainer>
              <img src={SWITCH} alt="switch" className="switch-icon" />
              <p className="trades-text">Trades</p>
              <img src={ARROW_DOWN} alt="arrow" className="arrow-icon" />
            </div>
            <SwitchContainer>
              <div className="container-buttons">
                <img src={COLLAPSE} alt="collapse" className="collapse-icon" />
                <img
                  src={CROSS}
                  alt="cross"
                  className="cross-icon"
                  onClick={() => setIsChatBox(false)}
                />
              </div>
            </SwitchContainer>
          </div>

          <ImagePart>
            <p>No Messages Yet</p>
          </ImagePart>
          <MessageInput type="text" placeholder="Login to chat" />
          <StyledIconSection>
            <div className="icons">
              <img src={EMOJI} alt="emoji" className="emoji" />
              <img src={SETTINGS} alt="settings" className="settings" />
              <p>Rules</p>
            </div>

            <div className="info">
              <p className="info-value">200</p>
              <div className="send-button">
                <p className="send-text">Send</p>
              </div>
            </div>
          </StyledIconSection>

          <Link to="https://t.me/casino_crafters" target="_blank">
            <div
              style={{
                position: "absolute",
                left: "-2.8pc",
                bottom: "1.8pc",
                background: "#272B38",
                borderRadius: "999px",
                padding: "8px",
                cursor: "pointer",
                zIndex: 300,
              }}
            >
              <img src={SUPPORT} alt="support" />
            </div>
          </Link>
        </StyledChatBoxContainer>
      ) : (
        <Link to="https://t.me/casino_crafters" target="_blank">
          <div
            style={{
              position: "fixed",
              right: "1pc",
              bottom: "0.8pc",
              background: "#272B38",
              borderRadius: "999px",
              padding: "8px",
              cursor: "pointer",
            }}
          >
            <img src={SUPPORT} alt="support" />
          </div>
        </Link>
      )}
    </>
  );
};

export default ChatBox;
