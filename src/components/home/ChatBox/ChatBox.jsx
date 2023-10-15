//assets
import { Link } from "react-router-dom";
import { ReactComponent as MSG } from "../../../assets/images/Frame (31).svg";
import { ReactComponent as SWITCH } from "../../../assets/images/Frame (32).svg";
import { ReactComponent as ARROW_DOWN } from "../../../assets/images/Frame (33).svg";
import { ReactComponent as COLLAPSE } from "../../../assets/images/Frame (34).svg";
import { ReactComponent as CROSS } from "../../../assets/images/Frame (35).svg";
import { ReactComponent as SETTINGS } from "../../../assets/images/Frame (36).svg";
import { ReactComponent as SUPPORT } from "../../../assets/images/Frame (65).svg";
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
                <MSG />
                <p>Chat</p>
              </ChatContainer>
              <SWITCH className="switch-icon" />
              <p className="trades-text">Trades</p>
              <ARROW_DOWN className="arrow-icon" />
            </div>
            <SwitchContainer>
              <div className="container-buttons">
                <COLLAPSE className="collapse-icon" />
                <CROSS
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
              <SETTINGS className="settings" />
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
              <SUPPORT />
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
            <SUPPORT />
          </div>
        </Link>
      )}
    </>
  );
};

export default ChatBox;
