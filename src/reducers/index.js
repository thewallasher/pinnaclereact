import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import propertyReducer from "./propertiesReducer";

export default combineReducers({
  form: formReducer,
  properties: propertyReducer
});
