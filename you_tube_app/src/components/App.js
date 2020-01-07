import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

export default class App extends React.Component {
  onTermSubmit = async term => {
    console.log(term);
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    console.log(response.data.items);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onTermSubmit} />
      </div>
    );
  }
}
