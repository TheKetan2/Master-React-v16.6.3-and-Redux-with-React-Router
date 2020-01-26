import React, { Component } from "react";

export default class App extends Component {
  state = {
    language: "english"
  };

  onLanguageChange = lang => {
    this.setState({ language: lang });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("dutch")}
          />
        </div>
        {this.state.language}
      </div>
    );
  }
}
