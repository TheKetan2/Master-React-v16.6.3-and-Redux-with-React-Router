import React from "react";
import ReactDOM from "react-dom";
import ApprovalCard from "./ApprovalCard";
// import CommentComponent from "./CommentComponent";
const App = () => {
  return (
    <div>
      <ApprovalCard />
      <ApprovalCard />
      <ApprovalCard />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
