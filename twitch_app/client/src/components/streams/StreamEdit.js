import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions/index";
import StreamForm from "./StreamForm";

import _ from "lodash";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    // event.preventDefault();
    // console.log(this.props.match.params.id);
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    console.log(this.props);
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit Stream</h3>
        {this.props.stream.title}
        <StreamForm
          initialValues={_.pick(this.props.stream, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
