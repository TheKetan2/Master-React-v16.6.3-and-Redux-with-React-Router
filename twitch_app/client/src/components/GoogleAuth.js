import React, { Component } from "react";

class GoogleAuth extends Component {
  state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "654653073494-mv1n63a9jdnbekkf43lb3oa2t3q777fb.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.onAuthChange();
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.auth = window.gapi.auth2.getAuthInstance();
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  renderAuthButton() {
    if (this.state.isSignedIn) {
      return <div>Signed In</div>;
    } else if (this.state.isSignedIn === null) {
      return <div>Checking...</div>;
    } else {
      return <div>Not Signed in</div>;
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
