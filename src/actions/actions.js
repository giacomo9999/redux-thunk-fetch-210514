import * as actionTypes from "./actionTypes";

export const incrementCounter = (data) => {
  console.log("action incrementCounter ", data);
  return { type: actionTypes.INCREMENT_COUNTER, payload: data.value };
};

export const decrementCounter = (data) => {
  return { type: actionTypes.DECREMENT_COUNTER, payload: data.value };
};
