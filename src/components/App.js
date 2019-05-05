import React from "react";
import PropertiesList from "./PropertiesList";
import PropertyView from "./PropertyView";
import PropertyCreate from "./PropertyCreate";
import PropertyEdit from "./PropertyEdit";
import history from "../history";

import { Router, Route } from "react-router-dom";
import Header from "./Header";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <Header />
          <Route path="/" exact component={PropertiesList} />
          <Route path="/property/create/" exact component={PropertyCreate} />
          <Route
            path="/property/edit/:propertyid"
            exact
            component={PropertyEdit}
          />
          <Route
            path="/property/view/:propertyid"
            exact
            component={PropertyView}
          />
        </Router>
      </div>
    );
  }
}

export default App;
