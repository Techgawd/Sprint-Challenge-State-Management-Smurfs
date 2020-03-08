import {
    GET_SMURF,
    GET_SUCCESS,
    GET_FAIL,
    ADD_SMURF,
    ADD_SUCCESS,
    ADD_FAIL
  } from "../reducers/action";
  
  const initialState = {
    messge: "",
    smurfs: []
  };
  
  export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_SMURF:
        return { ...state, message: action.payload };
      case GET_SUCCESS:
        return { message: "", smurfs: action.payload };
      case GET_FAIL:
        return { ...state, message: action.payload };
      case ADD_SMURF:
        return { ...state, message: action.payload };
      case ADD_SUCCESS:
        return { message: "Smurf added", smurfs: action.payload };
      case ADD_FAIL:
        return { ...state, message: action.payload };
      default:
        return state;
    }
  };