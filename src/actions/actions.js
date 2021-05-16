import * as actionTypes from "./actionTypes";

export const incrementCounter = (data) => {
  return { type: actionTypes.INCREMENT_COUNTER, payload: data.value };
};

export const decrementCounter = (data) => {
  return { type: actionTypes.DECREMENT_COUNTER, payload: data.value };
};

export const fetchData = (idObj) => {
  return (dispatch) => {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${idObj.postId}`)
      .then((res) => res.json())
      .then((json) => {
        if (!json.title) {
          json.title = "No entry at that index.";
        }
        dispatch({ type: actionTypes.FETCH_DATA, fetchedData: json });
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.DATA_FETCH_ERROR,
          msg: "Unable to fetch data",
        });
      });
  };
};
