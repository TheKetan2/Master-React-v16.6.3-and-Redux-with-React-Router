import React from "react";
import ReactDOM from "react-dom";
import CommentComponent from "./CommentComponent";
const App = () => {
  return (
    <div>
      <CommentComponent />
      <CommentComponent />
      <CommentComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
