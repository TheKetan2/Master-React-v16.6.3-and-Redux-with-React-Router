import React from "react";
import { fetchUsers } from "../actions";
import { connect } from "react-redux";

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUsers(this.props.userId);
    console.log("UserHeader ", this.props.users.name);
  }
  render() {
    // const user = this.props.users.find(user => user.id === this.props.userId);
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchUsers })(UserHeader);
