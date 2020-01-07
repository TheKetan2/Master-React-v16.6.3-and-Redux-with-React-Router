import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    term: "reactjs"
  };

  onInputChange = event => {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="search">Search Video</label>
            <input
              className="ui input"
              type="text"
              value={this.state.term}
              name="search"
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
