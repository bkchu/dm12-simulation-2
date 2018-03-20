import axios from "axios";
const initialState = {
  user: {},
  loading: false,
  properties: [],
  property_name: "",
  description: "",
  loan: 0,
  mortgage: 0,
  recommended_rent: 0,
  desired_rent: 0,
  address: "",
  city: "",
  state: "",
  zip: "",
  picture_url: ""
};

const USER_LOGGED_IN = "USER_LOGGED_IN";
const USER_REGISTERED = "USER_REGISTERED";
const USER_LOGGED_OUT = "USER_LOGGED_OUT";
const GET_PROPERTIES = "GET_PROPERTIES";
const FILTER_PROPERTIES = "FILTER_PROPERTIES";
const DELETE_PROPERTY = "DELETE_PROPERTY";
const UPDATE_PROPERTY_NAME = "UPDATE_PROPERTY_NAME";
const UPDATE_DESCRIPTION = "UPDATE_DESCRIPTION";
const UPDATE_LOAN = "UPDATE_LOAN";
const UPDATE_MORTGAGE = "UPDATE_MORTGAGE";
const UPDATE_RECOMMENDED_RENT = "UPDATE_RECOMMENDED_RENT";
const UPDATE_DESIRED_RENT = "UPDATE_DESIRED_RENT";
const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_STATE = "UPDATE_STATE";
const UPDATE_ZIP = "UPDATE_ZIP";
const UPDATE_PICTURE_URL = "UPDATE_PICTURE_URL";
const ADD_PROPERTY = "ADD_PROPERTY";
const CANCEL_ADD = "CANCEL_ADD";

function reducer(state = initialState, action) {
  console.log("action.type: ", action.type);
  switch (action.type) {
    case `${USER_LOGGED_IN}_FULFILLED`:
      return { ...state, user: action.payload };
    case `${USER_REGISTERED}_FULFILLED`:
      return { ...state, user: action.payload };
    case `${USER_LOGGED_OUT}_FULFILLED`:
      return { ...state, ...initialState };
    case `${GET_PROPERTIES}_PENDING`:
      return { ...state, loading: true };
    case `${FILTER_PROPERTIES}_PENDING`:
      return { ...state, loading: true };
    case `${DELETE_PROPERTY}_PENDING`:
      return { ...state, loading: true };
    case `${GET_PROPERTIES}_FULFILLED`:
      return { ...state, loading: false, properties: action.payload };
    case `${FILTER_PROPERTIES}_FULFILLED`:
      return { ...state, loading: false, properties: action.payload };
    case `${DELETE_PROPERTY}_FULFILLED`:
      return { ...state, loading: false, properties: action.payload };
    case UPDATE_PROPERTY_NAME:
      return { ...state, property_name: action.payload };
    case UPDATE_DESCRIPTION:
      return { ...state, description: action.payload };
    case UPDATE_LOAN:
      return { ...state, loan: action.payload };
    case UPDATE_MORTGAGE:
      return { ...state, mortgage: action.payload };
    case UPDATE_RECOMMENDED_RENT:
      return { ...state, recommended_rent: action.payload };
    case UPDATE_DESIRED_RENT:
      return { ...state, desired_rent: action.payload };
    case UPDATE_ADDRESS:
      return { ...state, address: action.payload };
    case UPDATE_CITY:
      return { ...state, city: action.payload };
    case UPDATE_STATE:
      return { ...state, state: action.payload };
    case UPDATE_ZIP:
      return { ...state, zip: action.payload };
    case UPDATE_PICTURE_URL:
      return { ...state, picture_url: action.payload };
    case `${ADD_PROPERTY}_FULFILLED`:
      return { ...state, ...action.payload };
    case CANCEL_ADD:
      return { ...initialState };
    default:
      return state;
  }
}

export function userLoggedIn(username, password, history) {
  return {
    type: USER_LOGGED_IN,
    payload: axios
      .post("/api/auth/login", { username, password })
      .then(response => {
        history.push("/dashboard");
      })
      .catch(err => console.log(err))
  };
}
export function userRegistered(username, password, history) {
  return {
    type: USER_REGISTERED,
    payload: axios
      .post("/api/auth/register", { username, password })
      .then(response => {
        history.push("/dashboard");
      })
      .catch(err => console.log(err))
  };
}

export function userLoggedOut(history) {
  return {
    type: USER_LOGGED_OUT,
    payload: axios
      .post("/api/auth/logout")
      .then(response => {
        console.log(history);
      })
      .catch(err => console.log(err))
  };
}

export function getProperties() {
  return {
    type: GET_PROPERTIES,
    payload: axios
      .get("/api/properties")
      .then(response => {
        return response.data;
      })
      .catch(err => console.log(err))
  };
}

export function filterProperties(filter) {
  return {
    type: FILTER_PROPERTIES,
    payload: axios
      .get("/api/properties?filter=" + filter)
      .then(response => response.data)
      .catch(err => console.log(err))
  };
}

export function deleteProperty(id) {
  return {
    type: DELETE_PROPERTY,
    payload: axios
      .delete("/api/properties/" + id)
      .then(response => {
        return response.data;
      })
      .catch(err => console.log(err))
  };
}

export function updatePropertyName(propertyName) {
  return {
    type: UPDATE_PROPERTY_NAME,
    payload: propertyName
  };
}
export function updateDescription(description) {
  return {
    type: UPDATE_DESCRIPTION,
    payload: description
  };
}
export function updateLoan(loan) {
  return {
    type: UPDATE_LOAN,
    payload: loan
  };
}
export function updateMortgage(mortgage) {
  return {
    type: UPDATE_MORTGAGE,
    payload: mortgage
  };
}
export function updateRecommendedRent(recommendedRent) {
  return {
    type: UPDATE_RECOMMENDED_RENT,
    payload: recommendedRent
  };
}
export function updateDesiredRent(desiredRent) {
  return {
    type: UPDATE_DESIRED_RENT,
    payload: desiredRent
  };
}
export function updateAddress(address) {
  return {
    type: UPDATE_ADDRESS,
    payload: address
  };
}
export function updateCity(city) {
  return {
    type: UPDATE_CITY,
    payload: city
  };
}
export function updateState(state) {
  return {
    type: UPDATE_STATE,
    payload: state
  };
}
export function updateZip(zip) {
  return {
    type: UPDATE_ZIP,
    payload: zip
  };
}
export function updatePictureUrl(pictureUrl) {
  return {
    type: UPDATE_PICTURE_URL,
    payload: pictureUrl
  };
}
export function addProperty(property, history) {
  return {
    type: ADD_PROPERTY,
    payload: axios
      .post("/api/properties", { ...property })
      .then(response => {
        history.push("/dashboard");
      })
      .catch(err => console.log(err))
  };
}
export function cancelAdd(history) {
  return {
    type: CANCEL_ADD,
    payload: history.push("/dashboard")
  };
}

export default reducer;
