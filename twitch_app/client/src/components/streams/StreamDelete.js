import React from "react";
import Modal from "../Modal";

export default function StreamDelete() {
  const actions = (
    <React.Fragment>
      <buttun className="ui button negative">Delete</buttun>
      <buttun className="ui button">Cancel</buttun>
    </React.Fragment>
  );
  return (
    <div>
      StreamDelete
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete this stream?"
        actions={actions}
      />
    </div>
  );
}
