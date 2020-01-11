import React from "react";
import { fetchUsers } from "../actions";
import { connect } from "react-redux";

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUsers(this.props.userId);
    console.log("UserHeader ", this.props.users.name);
  }
  render() {
    return <div>{this.props.users.name}</div>;
  }
}

const mapStateToProps = state => {
  return { users: state.users };
};

export default connect(mapStateToProps, { fetchUsers })(UserHeader);
