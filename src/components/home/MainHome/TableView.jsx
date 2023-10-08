import React, { useEffect, useRef, useState } from "react";

//assets
import IMG1 from "../../../assets/images/Frame (28).svg";
import IMG3 from "../../../assets/images/IMAGE (12).png";
import IMG2 from "../../../assets/images/IMAGE (32).png";
import SectionHeader from "../../Common/SectionHeader/SectionHeader";

const TableView = () => {
  const filterOptions = ["All Bets", "High Rollers", "Lucky Bets", "Trades"];

  const [activeOption, setActiveOption] = useState(filterOptions[0]);

  const handleOptionChange = (option) => {
    setActiveOption(option);
  };

  const data = new Array(12).fill(null);

  const tableContainerRef = useRef(null);
  const scrollSpeed = 1;

  useEffect(() => {
    const container = tableContainerRef.current;

    const scroll = () => {
      container.scrollTop += scrollSpeed;

      // Reset scroll to the top when it reaches the bottom
      if (
        container.scrollTop >=
        container.scrollHeight - container.clientHeight
      ) {
        container.scrollTop = 0;
      }

      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="container" style={{ display: "flex" }}>
      <div className="row">
        <SectionHeader
          iconHeader={IMG1}
          casinoText="BETS"
          hasArrows={false}
          hasFilterOptions={true}
          onOptionChange={handleOptionChange}
          filterOptions={filterOptions}
        />
        {/* table */}

        <div
          className="d-text"
          style={{
            color: "#686D7B",
            display: "flex",
            padding: "20px 20px",
            alignItems: "flex-start",
            justifyContent: "space-between",
            fontSize: "12px",
          }}
        >
          <div
            className="f"
            style={{
              display: "flex",
            }}
          >
            <p>GAMES</p>
          </div>
          <div className="main">
            <p>PLAYER/CLAN</p>
          </div>
          <div
            className="end"
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "70px",
            }}
          >
            <p>TIME</p>
            <p>WAGER</p>
            <p>MULTIPLIER</p>
            <p>PAYOUT</p>
          </div>
        </div>

        {/* other table main */}
        <div style={{ height: "50%", overflow: "hidden" }}>
          <div
            ref={tableContainerRef}
            style={{ height: "100%", overflowY: "hidden" }}
          >
            {data.map((_, index) => (
              <React.Fragment key={index}>
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    background: "rgba(203, 215, 255, 0.03)",
                    padding: "10px 22px",
                    borderRadius: "8px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "7px",
                    }}
                  >
                    <img
                      src={IMG2}
                      alt="logo"
                      style={{ width: "27px", height: "27px" }}
                    />
                    <p
                      style={{
                        width: "99px",
                        color: "#fff",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "16.8px",
                      }}
                    >
                      Temple Tumble
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px",
                        marginLeft: "170px",
                      }}
                    >
                      <img
                        src={IMG3}
                        alt="logo"
                        style={{ width: "17px", height: "18px" }}
                      />
                      <p
                        style={{
                          width: "61px",
                          color: "#fff",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight: "16.8px",
                        }}
                      >
                        Yaddle77
                      </p>
                      <div style={{ display: "flex", gap: "12px" }}>
                        <p
                          style={{
                            width: "61px",
                            color: "#fff",
                            fontSize: "14px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "16.8px",
                            marginLeft: "262px",
                          }}
                        >
                          10s
                        </p>
                        <p
                          style={{
                            width: "37px",
                            color: "#fff",
                            fontSize: "14px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "16.8px",
                            marginLeft: "30px",
                          }}
                        >
                          $2.00
                        </p>
                        <p
                          style={{
                            width: "37px",
                            color: "#fff",
                            fontSize: "14px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "16.8px",
                            marginLeft: "60px",
                          }}
                        >
                          0.00x
                        </p>
                        <p
                          style={{
                            width: "37px",
                            color: "#fff",
                            fontSize: "14px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "16.8px",
                            marginLeft: "80px",
                          }}
                        >
                          $0.00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {index !== data.length - 1 && (
                  <div style={{ height: "16px" }} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* end */}
      </div>
    </div>
  );
};

export default TableView;
