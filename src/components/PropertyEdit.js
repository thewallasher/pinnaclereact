import React from "react";
import { connect } from "react-redux";
import { editProperty } from "../actions";
import PropertyForm from "./PropertyForm";

class PropertyEdit extends React.Component {
  onSubmit = formValues => {
    this.props.editProperty(this.props.match.params.propertyid, formValues);
  };

  render() {
    if (!this.props.selectedProperty) return <div>Loading</div>;

    return (
      <div>
        <h3>Edit Property</h3>
        <PropertyForm
          onSubmit={this.onSubmit}
          initialValues={this.props.selectedProperty}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    selectedProperty: state.properties[ownProps.match.params.propertyid]
  };
};

export default connect(
  mapStateToProps,
  { editProperty }
)(PropertyEdit);
