import React from "react";
import "./SeasonDisplay.css";

const SeasonConfig = {
  summer: {
    text: "Let's hit the beach",
    iconName: "sun"
  },
  winter: {
    text: "Burr, it's chilly!",
    iconName: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());

  const seasonConfig = SeasonConfig[season];
  return (
    <div>
      <i
        style={{ position: "absolute", top: "10px", left: "10px" }}
        className={`${seasonConfig.iconName} icon massive left`}
      />
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
        {seasonConfig.text}
      </h1>
      <i
        style={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          textAlign: "center"
        }}
        className={`${seasonConfig.iconName} icon massive right`}
      />
    </div>
  );
};

export default SeasonDisplay;
