import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";

import { fetchProperties, deleteProperty } from "../actions";
import { connect } from "react-redux";

class PropertiesList extends React.Component {
  state = {
    redirect: false
  };

  componentDidMount() {
    this.props.fetchProperties();
  }

  renderList() {
    return this.props.properties.map(property => {
      return (
        <tr key={property.propertyid}>
          <td>{property.name}</td>
          <td>{property.value}</td>
          <td>
            <Link to={`/property/view/${property.propertyid}`}>View</Link> |
            <Link to={`/property/edit/${property.propertyid}`}>Edit</Link> |
            <a
              href="#top"
              onClick={() => this.deleteProperty(property.propertyid)}
            >
              Delete
            </a>
          </td>
        </tr>
      );
    });
  }

  handleClickEvent = () => {
    this.setState({ redirect: true });
  };

  deleteProperty = id => {
    this.props.deleteProperty(id);
  };

  render() {
    if (!this.props.properties) return <div>Loading</div>;

    if (this.state.redirect) return <Redirect push to="/property/create/" />;

    return (
      <div>
        <table className="ui celled table">
          <thead>
            <tr>
              <th>Property Name</th>
              <th>Property Value</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.renderList()}</tbody>
        </table>
        <button onClick={this.handleClickEvent}>Create Property</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { properties: Object.values(state.properties) };
};

export default connect(
  mapStateToProps,
  { fetchProperties, deleteProperty }
)(PropertiesList);
