import React, { Component } from "react";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

class Button extends Component {
  //   static contextType = LanguageContext;
  renderSubmit = language => {
    return language === "english" ? "Submit" : "Thik Hai";
  };

  renderButton = color => (
    <button className={`ui button ${color}`}>
      <LanguageContext.Consumer>
        {({ language }) => this.renderSubmit(language)}
      </LanguageContext.Consumer>
    </button>
  );

  render() {
    // const text = this.context === "english" ? "Submit" : "Thik Hai";
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
