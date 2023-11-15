//assets
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../../AppContext";
import { ReactComponent as MSG } from "../../../assets/images/Frame (31).svg";
import { ReactComponent as CANDLE_ICON } from "../../../assets/images/Frame (32).svg";
import { ReactComponent as ARROW_DOWN } from "../../../assets/images/Frame (33).svg";
import { ReactComponent as COLLAPSE } from "../../../assets/images/Frame (34).svg";
import { ReactComponent as CROSS } from "../../../assets/images/Frame (35).svg";
import { ReactComponent as SETTINGS } from "../../../assets/images/Frame (36).svg";
import { ReactComponent as SUPPORT } from "../../../assets/images/Frame (65).svg";
import EMOJI from "../../../assets/images/IMAGE (43).png";
import RANK_ICON from "../../../assets/images/rank-icon-gold.png";
import CryptoFuturesCoins from "../../Common/CryptoFuturesCoins/CryptoFuturesCoins";
import CardMessage from "./CardMessage";
import {
  ImagePart,
  MessageInput,
  StyledChatBoxContainer,
  StyledIconSection,
  SwitchContainer,
} from "./styles";

const ChatBox = ({ isChatBox, setIsChatBox }) => {
  const { isTabletScreen } = useContext(AppContext);

  const [message, setMessage] = useState(""); // Track the input message
  const [messages, setMessages] = useState([]); // Store chat messages
  const [activeButton, setActiveButton] = useState("chat"); // Track the active button

  const handleButtonClick = (button) => {
    setActiveButton(button);
    // Add any additional logic based on the clicked button if needed
  };

  const handleSend = () => {
    if (message) {
      // Add the new message to the messages list
      setMessages([...messages, message]);
      // Clear the message input field
      setMessage("");
    }
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      {isChatBox ? (
        <StyledChatBoxContainer isTabletScreen={isTabletScreen}>
          <div className="top-actions-container">
            <div className="chat-trades">
              <div
                className={`btn-chatbox ${
                  activeButton === "chat" ? "active-btn" : ""
                }`}
                onClick={() => handleButtonClick("chat")}
              >
                <MSG />
                Chat
              </div>
              <div
                className={`btn-chatbox ${
                  activeButton === "trades" ? "active-btn" : ""
                }`}
                style={{ cursor: "pointer" }}
                onClick={() => handleButtonClick("trades")}
              >
                <CANDLE_ICON className="switch-icon" />
                Trades
                <ARROW_DOWN className="arrow-icon" />
              </div>
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

          {activeButton === "chat" ? (
            <>
              {messages.length === 0 ? (
                <ImagePart>
                  <p>No Messages Yet</p>
                </ImagePart>
              ) : (
                <div className="chat-messages">
                  {messages.map((msg, index) => (
                    <CardMessage
                      key={index}
                      rankIcon={RANK_ICON}
                      playerName={"Alfred"}
                      messageText={msg}
                    />
                  ))}
                </div>
              )}

              <MessageInput
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleInputKeyPress}
              />

              <StyledIconSection>
                <div className="icons">
                  <img src={EMOJI} alt="emoji" className="emoji" />
                  <SETTINGS className="settings" />
                  <p>Rules</p>
                </div>

                <div className="info">
                  <p className="info-value">200</p>
                  <button onClick={handleSend} className="send-button">
                    Send
                  </button>
                </div>
              </StyledIconSection>
            </>
          ) : (
            <div className="container-bets">
              <div class="section-title" style={{ marginBottom: "21px" }}>
                My Active Bets
              </div>
              <div class="active-bets" style={{ padding: "0px 0px 10px" }}>
                <CANDLE_ICON />

                <div class="text">No Bets Yet</div>
              </div>

              <div style={{ paddingTop: "25px" }}>
                <div class="section-title" style={{ marginBottom: "10px" }}>
                  Market Prices
                </div>
                <CryptoFuturesCoins />
              </div>
            </div>
          )}

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
