import properties from "../apis/properties";
import history from "../history";

import {
  CREATE_PROPERTY,
  FETCH_PROPERTY,
  FETCH_PROPERTIES,
  EDIT_PROPERTY,
  DELETE_PROPERTY
} from "./types";

export const createProperty = formValues => async dispatch => {
  const response = await properties.post("/properties", formValues);

  dispatch({ type: CREATE_PROPERTY, payload: response.data });
  history.push("/");
};

export const fetchProperties = () => async dispatch => {
  const response = await properties.get("/properties");
  dispatch({ type: FETCH_PROPERTIES, payload: response.data });
};

export const fetchProperty = id => async dispatch => {
  const response = await properties.get(`/properties/${id}`);

  dispatch({ type: FETCH_PROPERTY, payload: response.data });
};

export const editProperty = (id, formValues) => async dispatch => {
  const response = await properties.put(`/properties/${id}`, formValues);

  dispatch({ type: EDIT_PROPERTY, payload: response.data });
  history.push("/");
};

export const deleteProperty = id => async dispatch => {
  await properties.delete(`/properties/${id}`);

  dispatch({ type: DELETE_PROPERTY, payload: id });
};
