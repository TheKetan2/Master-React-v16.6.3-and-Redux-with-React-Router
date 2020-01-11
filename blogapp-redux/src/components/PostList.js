import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchPosts, fetchUsers } from "../actions";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchUsers();
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <h3>
                {`User: ${this.props.users
                  .filter(user => user.id === post.userId)
                  .map(u => u.name)}
                `}
              </h3>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    console.log("from postlist:", this.props.posts);
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { posts: state.posts, users: state.users };
};

export default connect(mapStateToProps, { fetchPosts, fetchUsers })(PostList);
