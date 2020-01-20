import React from "react";
import { connect } from "react-redux";
import reducers from "../../reducers";
const StreamList = props => {
  return (
    <div>
      <h2>StreamList</h2>
      User Id: {props.userId}
    </div>
  );
};

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn, userId: state.auth.userId };
};

export default connect(mapStateToProps)(StreamList);
