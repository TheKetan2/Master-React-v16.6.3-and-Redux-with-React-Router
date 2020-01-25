import React, { Component } from "react";
// import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../actions/index";
import StreamForm from "./StreamForm";
class StreamCreate extends Component {
  onSubmit = formValues => {
    // event.preventDefault();
    console.log(formValues);
    this.props.createStream(formValues);
  };

  render() {
    // console.log(this.props);
    return (
      <div>
        <h3>Stream Create</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

// const validate = formValues => {
//   const errors = {};
//   if (!formValues.title) {
//     errors.title = "Enter title";
//   }

//   if (!formValues.description) {
//     errors.description = "Enter description";
//   }

//   return errors;
// };

// const formWrapped = reduxForm({ form: "streamCreate", validate })(StreamCreate);

export default connect(null, { createStream })(StreamCreate);
