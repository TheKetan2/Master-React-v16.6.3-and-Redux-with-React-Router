import React from "react";
import Summer from "./img/summer.jpg";
import Winter from "./img/winter.jpg";

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
      <i className={`${seasonConfig.iconName} icon`} />
      <h1>{seasonConfig.text}</h1>
      <i className={`${seasonConfig.iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
