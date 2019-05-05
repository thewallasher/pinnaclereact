import {
  CREATE_PROPERTY,
  FETCH_PROPERTY,
  FETCH_PROPERTIES,
  EDIT_PROPERTY,
  DELETE_PROPERTY
} from "../actions/types";

import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PROPERTIES:
      return { ...state, ..._.mapKeys(action.payload, "propertyid") };

    case CREATE_PROPERTY:
      return { ...state, [action.payload.propertyid]: action.payload };

    case FETCH_PROPERTY:
      return { ...state, [action.payload.propertyid]: action.payload };

    case EDIT_PROPERTY:
      return { ...state, [action.payload.propertyid]: action.payload };

    case DELETE_PROPERTY:
      return _.omit(state, action.payload);

    default:
      return state;
  }
};
