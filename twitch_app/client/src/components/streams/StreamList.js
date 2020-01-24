import React from "react";
import { connect } from "react-redux";
// import reducers from "../../reducers";
import { fetchStreams } from "../../actions";
class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  render() {
    return (
      <div>
        <h2>StreamList</h2>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return { isSignedIn: state.auth.isSignedIn, userId: state.auth.userId };
// };

export default connect(null, { fetchStreams })(StreamList);
