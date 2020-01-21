import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
  render() {
    // console.log(this.props);
    return (
      <form>
        <Field name="title" />
        <Field name="description" />
      </form>
    );
  }
}

export default reduxForm({ form: "streamCreate" })(StreamCreate);
