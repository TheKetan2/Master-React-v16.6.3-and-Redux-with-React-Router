import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./components/SeasonDisplay";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   lat: null,
  //   //   errorMsg: ""
  //   // };
  // }

  state = { lat: null, errorMsg: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => this.setState({ errorMsg: err.message })
    );
  }

  render() {
    return (
      <div>
        {/* {!this.state.errorMsg && !this.state.lat
          ? "Loading..."
          : this.state.errorMsg
          ? `Error: ${this.state.errorMsg}`
          : `Latitude: ${this.state.lat}`} */}
        <SeasonDisplay lat={this.state.lat} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
