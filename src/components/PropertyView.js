import React from "react";
import { Link } from "react-router-dom";
import { fetchProperty } from "../actions";
import { connect } from "react-redux";

class PropertyView extends React.Component {
  componentDidMount() {
    this.props.fetchProperty(this.props.match.params.propertyid);
  }
  render() {
    if (!this.props.selectedProperty) return <div>Loading</div>;

    return (
      <div className="ui form">
        <div className="ui label">
          Property ID:{" "}
          <div className="detail">{this.props.selectedProperty.propertyid}</div>
        </div>
        <br />
        <div className="ui label">
          Property Name:{" "}
          <div className="detail">{this.props.selectedProperty.name}</div>
        </div>
        <br />
        <div className="ui label">
          Property Value:{" "}
          <div className="detail">{this.props.selectedProperty.value}</div>
        </div>
        <br />
        <div className="ui label">
          Property Default Value:{" "}
          <div className="detail">{this.props.selectedProperty.value}</div>
        </div>
        <br />
        <div className="ui label">
          Comments:{" "}
          <div className="detail">{this.props.selectedProperty.comments}</div>
        </div>
        <br />
        <div>
          <Link className="ui button primary" to={"/"}>
            Return
          </Link>
        </div>
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
  { fetchProperty }
)(PropertyView);
