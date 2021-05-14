import * as actionTypes from "../actions/actionTypes";

const initialState = { counter: 0, dataFromWeb: null, error: "" };

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_COUNTER:
      return { ...state, counter: state.counter + action.payload };
    case actionTypes.DECREMENT_COUNTER:
      return { ...state, counter: state.counter - action.payload };
    case actionTypes.FETCH_DATA:
      return { ...state, dataFromWeb: action.fetchedData };
    case actionTypes.DATA_FETCH_ERROR:
      return { ...state, error: action.msg };
    default:
      return state;
  }
};

export default appReducer;
