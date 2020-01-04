import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./components/SeasonDisplay";
import Spinner from "./components/Spinner";

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
        {!this.state.errorMsg && !this.state.lat ? (
          <Spinner msg={"Fetching location data..."} />
        ) : (
          <SeasonDisplay lat={this.state.lat} />
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
