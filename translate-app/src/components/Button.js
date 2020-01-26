import React, { Component } from "react";
import LanguageContext from "../context/LanguageContext";

class Button extends Component {
  //   static contextType = LanguageContext;
  renderSubmit = value => {
    return value === "english" ? "Submit" : "Thik Hai";
  };

  render() {
    // const text = this.context === "english" ? "Submit" : "Thik Hai";
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {value => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }
}

export default Button;
