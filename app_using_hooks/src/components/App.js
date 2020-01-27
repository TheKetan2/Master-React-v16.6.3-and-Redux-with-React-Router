import React, { Component } from "react";

export default class App extends Component {
  state = { resource: "posts" };
  render() {
    return (
      <div className="ui container">
        <div style={{ marginTop: "10px" }}>
          <button
            className="ui button red"
            onClick={() => this.setState({ resource: "posts" })}
          >
            Posts
          </button>
          <button
            className="ui button green"
            onClick={() => this.setState({ resource: "todos" })}
          >
            Todos
          </button>
        </div>
        {this.state.resource}
      </div>
    );
  }
}
