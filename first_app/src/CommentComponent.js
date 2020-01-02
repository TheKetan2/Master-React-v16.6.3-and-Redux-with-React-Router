import React from "react";
import faker from "faker";
const CommentComponent = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {faker.name.findName()}
          </a>
          <div className="metadata">
            <span className="date"> {faker.date.weekday()}</span>
          </div>
          <div className="text">{faker.random.word()}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentComponent;
