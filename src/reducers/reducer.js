import * as actionTypes from "../actions/actionTypes";

const initialState = { counter: 0 };

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_COUNTER:
      console.log("reducer here...", action);
      return { counter: state.counter + action.payload };
    case actionTypes.DECREMENT_COUNTER:
      console.log("reducer here...", action);
      return { counter: state.counter - action.payload };
    default:
      return state;
  }
};

export default appReducer;
