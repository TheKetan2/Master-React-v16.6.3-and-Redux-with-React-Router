import React from "react";
import { fetchUsers } from "../actions";
import { connect } from "react-redux";

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUsers(this.props.userId);
  }
  render() {
    // const user = this.props.users.find(user => user.id === this.props.userId);
    const { user } = this.props;
    // console.log("UserHeader ", user.name);
    if (!user) {
      return null;
    }
    return (
      <div className="header">
        {console.log("UserHeader ", user.name)}
        {user.name}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchUsers })(UserHeader);
