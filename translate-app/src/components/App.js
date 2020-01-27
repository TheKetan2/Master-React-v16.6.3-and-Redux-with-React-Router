import React, { Component } from "react";
import UserCreate from "./UserCreate";
import { LanguageContext, LanguageStore } from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";
import LanguageSelector from "./LanguageSelector";

export default class App extends Component {
  // state = {
  //   language: "english",
  //   color: "red"
  // };

  // onLanguageChange = lang => {
  //   this.setState({ language: lang });
  // };

  dummy() {
    console.log("boom");
  }
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}
