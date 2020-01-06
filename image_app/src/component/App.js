import React from "react";
import SearchBar from "./Searchbar";
import ImageList from "./ImageList";
import unsplash from "../api/unsplash";

import StackGrid from "react-stack-grid";

class App extends React.Component {
  state = { images: [], term: "" };

  onSearchSubmit = async term => {
    this.setState({ term: term, images: [] });

    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });

    this.setState({
      images: response.data.results
    });
    console.log(response.data.results);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Total of {this.state.images.length} images found
        {this.state.images.length === 0 && this.state.term ? (
          <div className="ui segment">
            <p></p>
            <div className="ui active inverted dimmer">
              <div className="ui loader"></div>
            </div>
          </div>
        ) : (
          <StackGrid>
            {this.state.images.map((image, i) => (
              <ImageList
                full={image.urls.full}
                thumb={image.urls.thumb}
                key={i}
              />
            ))}
          </StackGrid>
        )}
      </div>
    );
  }
}

export default App;
