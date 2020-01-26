import React, { Component } from "react";
import LanguageContext from "../context/LanguageContext";

export default class Field extends Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context === "english" ? "Name" : "Shubh Naam";
    return (
      <React.Fragment>
        <label>{text}</label>
        <input />
      </React.Fragment>
    );
  }
}
