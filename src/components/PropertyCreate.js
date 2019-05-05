import React from "react";
import { connect } from "react-redux";
import { createProperty } from "../actions";
import PropertyForm from "./PropertyForm";

class PropertyCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createProperty(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Property</h3>
        <PropertyForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createProperty }
)(PropertyCreate);
