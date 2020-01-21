import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
  renderInput({ input, label, meta }) {
    console.log(meta);
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {meta.touched ? <div>{meta.error}</div> : null}
      </div>
    );
  }

  onSubmit = formValues => {
    // event.preventDefault();
    console.log(formValues);
  };

  render() {
    // console.log(this.props);
    return (
      <form
        className="ui form"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "Enter title";
  }

  if (!formValues.description) {
    errors.description = "Enter description";
  }

  return errors;
};

export default reduxForm({ form: "streamCreate", validate })(StreamCreate);
