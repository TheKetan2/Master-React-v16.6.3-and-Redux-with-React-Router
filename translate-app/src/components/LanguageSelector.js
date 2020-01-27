import React, { Component } from "react";
import LanguageContext from "../context/LanguageContext";

export default class LanguageSelector extends Component {
  static contextType = LanguageContext;

  render() {
    console.log(this.context);

    return (
      <div>
        {`Select a language: `}
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange("english")}
        />
        <i
          className="flag in"
          onClick={() => this.context.onLanguageChange("hindi")}
        />
      </div>
    );
  }
}
