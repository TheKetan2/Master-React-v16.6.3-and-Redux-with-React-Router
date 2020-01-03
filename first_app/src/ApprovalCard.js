import React from "react";
import CommentComponent from "./CommentComponent";
const ApprovalCard = () => {
  return (
    <div
      style={{
        alignContent: "center",
        width: "300px",
        border: "1px solid black",
        borderRadius: "5px",
        margin: "10px",
        overflow: "hidden"
      }}
    >
      {" "}
      <div>
        <CommentComponent />
      </div>
      <div
        style={{
          width: "100%",
          backgroundColor: "black",
          margin: "0",
          height: "30px"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "5px"
          }}
        >
          <button
            style={{ backgroundColor: "green", color: "white", border: "0px" }}
          >
            Approve
          </button>
          <button
            style={{ backgroundColor: "red", color: "white", border: "0px" }}
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
