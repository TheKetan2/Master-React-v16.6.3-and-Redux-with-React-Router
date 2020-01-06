import React from "react";

class SearchBar extends React.Component {
  state = {
    term: ""
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
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Input Search</label>
            <input
              type="text"
              value={this.state.term}
              placeholder="Search images..."
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
