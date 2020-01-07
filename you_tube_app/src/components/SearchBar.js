import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    term: "somethin"
  };

  onInputChange = event => {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  };

  onInputSubmit = event => {
    event.preventDefault();
    this.setState({ term: event.target.value });
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form">
          <div className="field">
            <label htmlFor="search">Search Video</label>
            <input
              className="ui input"
              type="text"
              value={this.state.term}
              name="search"
              onChange={this.onInputChange}
              onSubmit={this.onInputSubmit}
            />
          </div>
        </form>
      </div>
    );
  }
}
