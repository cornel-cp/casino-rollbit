import React, { useContext, useEffect, useRef, useState } from "react";
import { StyledSportNavOption, StyledSportsHeader } from "./StyledSportsHeader";

import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../../../../AppContext";
import { ReactComponent as ARROW_DOWN } from "../../../../assets/images/Arrow-Down.svg";
import { ReactComponent as MY_BETS } from "../../../../assets/images/MyBets.svg";
import { ReactComponent as AMERICAN_FOOTBALL } from "../../../../assets/images/american-football.svg";
import { ReactComponent as BASEBALL } from "../../../../assets/images/baseball.svg";
import { ReactComponent as BASKETBALL } from "../../../../assets/images/basketball.svg";
import { ReactComponent as BOXING } from "../../../../assets/images/boxing.svg";
import { ReactComponent as E_BATTLES } from "../../../../assets/images/e-battles.svg";
import { ReactComponent as ROCKET_LEAGUE } from "../../../../assets/images/e-boxing-icon.svg";
import { ReactComponent as E_PADDLEBOARD } from "../../../../assets/images/e-paddleboard-icon.svg";
import { ReactComponent as E_BASEBALL } from "../../../../assets/images/eBaseball.svg";
import { ReactComponent as FIFA } from "../../../../assets/images/fifa.svg";
import { ReactComponent as FOOTBALL } from "../../../../assets/images/football.svg";
import { ReactComponent as HANDBALL } from "../../../../assets/images/handball.svg";
import { ReactComponent as HEADPHONES } from "../../../../assets/images/headphones-icon.svg";
import { ReactComponent as HOME } from "../../../../assets/images/home-icon.svg";
import { ReactComponent as ICE_HOCKEY } from "../../../../assets/images/ice-hockey.svg";
import { ReactComponent as LIVE } from "../../../../assets/images/live-icon.svg";
import { ReactComponent as MMA } from "../../../../assets/images/mma-icon.svg";
import { ReactComponent as NBA_2K } from "../../../../assets/images/nba-2k.svg";
import { ReactComponent as PADDLEBOARD } from "../../../../assets/images/paddleboard-icon.svg";
import { ReactComponent as RUGBY } from "../../../../assets/images/rugby-icon.svg";
import { ReactComponent as SEARCH } from "../../../../assets/images/search-icon.svg";
import { ReactComponent as STAR } from "../../../../assets/images/star-icon.svg";
import { ReactComponent as TABLE_TENNIS } from "../../../../assets/images/table-tennis-icon.svg";
import { ReactComponent as TENNIS } from "../../../../assets/images/tennis-icon.svg";
import { ReactComponent as VOLLEYBALL } from "../../../../assets/images/volleyball.svg";

const options = [
  { icon: <HOME />, url: "/home" },
  { icon: <LIVE />, url: "/live" },
  { icon: <STAR />, url: "/star" },
  { icon: <FOOTBALL />, url: "/soccer" },
  {
    icon: <BASKETBALL />,

    url: "/basketball",
  },
  { icon: <ICE_HOCKEY />, url: "/ice-hockey" },
  { icon: <HEADPHONES />, url: "/headphones" },
  { icon: <FIFA />, url: "/fifa" },
  { icon: <VOLLEYBALL />, url: "/volleyball" },
  { icon: <TENNIS />, url: "/tennis" },
  { icon: <AMERICAN_FOOTBALL />, url: "/american-footbal" },
  { icon: <MMA />, url: "/mma" },
  { icon: <BASEBALL />, url: "/baseball" },
  { icon: <PADDLEBOARD />, url: "/paddleboard" },
  { icon: <E_BASEBALL />, url: "/e-baseball" },
  { icon: <HANDBALL />, url: "/handball" },
  { icon: <TABLE_TENNIS />, url: "/table-tennis" },
  { icon: <E_BATTLES />, url: "/e-battles" },
  { icon: <BOXING />, url: "/boxing" },
  { icon: <NBA_2K />, url: "/nba-2k" },
  { icon: <ROCKET_LEAGUE />, url: "/rocket-league" },
  { icon: <RUGBY />, url: "/rugby" },
  { icon: <E_PADDLEBOARD />, url: "/e-paddleboard" },
];

const SportsHeader = () => {
  const location = useLocation();

  const { sportsSelectedOption, updateSportsSelectedOption } =
    useContext(AppContext);

  const [numOptionsToDisplay, setNumOptionsToDisplay] = useState(
    options.length
  );
  const [resizeCount, setResizeCount] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateQueryParams = () => {
      const urlParams = new URLSearchParams(location.search);
      const param = urlParams.get("bt-path");
      if (param) {
        updateSportsSelectedOption(param); // Update the global state
      }
    };

    // Call the function when the component mounts
    updateQueryParams();

    return () => {
      updateSportsSelectedOption("/home");
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const newResizeCount = Math.floor(
          containerRef.current.offsetWidth / 32
        );
        if (newResizeCount !== resizeCount) {
          setResizeCount(newResizeCount);
          setNumOptionsToDisplay(Math.min(options.length, newResizeCount / 2));
        }
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [resizeCount]);

  return (
    <StyledSportsHeader ref={containerRef}>
      <div className="navigation-options">
        {options.slice(0, numOptionsToDisplay).map((button, index) => {
          const buttonIsActive = button.url === sportsSelectedOption;
          return (
            <Link
              to={`/sports?bt-path=${encodeURIComponent(button.url)}`}
              onClick={() => updateSportsSelectedOption(button.url)}
              key={index}
            >
              <StyledSportNavOption isActive={buttonIsActive}>
                {button.icon}
              </StyledSportNavOption>
            </Link>
          );
        })}
        <StyledSportNavOption style={{ width: "10px", height: "10px" }}>
          <ARROW_DOWN />
        </StyledSportNavOption>
      </div>
      <div className="navigation-actions"></div>
      <Link
        to={"/my-bets"}
        onClick={() => updateSportsSelectedOption("myBets")}
      >
        <StyledSportNavOption isActive={sportsSelectedOption === "myBets"}>
          <MY_BETS />
        </StyledSportNavOption>
      </Link>
      <Link to={"#"} onClick={() => updateSportsSelectedOption("search")}>
        <StyledSportNavOption isActive={sportsSelectedOption === "search"}>
          <SEARCH />
        </StyledSportNavOption>
      </Link>
    </StyledSportsHeader>
  );
};

export default SportsHeader;
