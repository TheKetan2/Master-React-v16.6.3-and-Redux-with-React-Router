import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

export default class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async term => {
    console.log(term);
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    console.log(response.data.items);
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
