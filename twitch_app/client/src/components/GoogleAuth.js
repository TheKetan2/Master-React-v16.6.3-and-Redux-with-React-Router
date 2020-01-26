import React, { Component } from "react";
import { connect } from "react-redux";
import { signOut, signIn } from "../actions";

class GoogleAuth extends Component {
  // state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:"YOUR CLIENT ID",
          scope: "email"
        })
        .then(() => {
          // this.onAuthChange();
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    // this.auth = window.gapi.auth2.getAuthInstance();
    // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  renderAuthButton() {
    if (this.props.isSignedIn) {
      return (
        <button
          className="ui red google button"
          onClick={() => window.gapi.auth2.getAuthInstance().signOut()}
        >
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else if (this.props.isSignedIn === null) {
      return null;
    } else {
      return (
        <button
          className="ui green google button"
          onClick={() => window.gapi.auth2.getAuthInstance().signIn()}
        >
          <i className="google icon" />
          Sign In
        </button>
      );
    }
  }

  render() {
    return (
      <div>
        <div>{this.renderAuthButton()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn, userId: state.auth.userId };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
