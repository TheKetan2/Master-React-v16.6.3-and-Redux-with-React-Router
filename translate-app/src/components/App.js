import React, { Component } from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

export default class App extends Component {
  state = {
    language: "english",
    color: "red"
  };

  onLanguageChange = lang => {
    this.setState({ language: lang });
  };

  render() {
    return (
      <div className="ui container">
        {`Select a language: `}
        <i
          className="flag us"
          onClick={() => this.onLanguageChange("english")}
        />
        <i className="flag in" onClick={() => this.onLanguageChange("dutch")} />
        <LanguageContext.Provider value={this.state.language}>
          <ColorContext.Provider value={this.state.color}>
            <UserCreate />
          </ColorContext.Provider>
        </LanguageContext.Provider>
      </div>
    );
  }
}
