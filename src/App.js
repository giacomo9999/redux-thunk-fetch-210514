// import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./actions/actions";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const postTitle = useSelector((state) => state.dataFromWeb.title);
  const dispatch = useDispatch();

  // fetch some data on mount
  // useEffect(() => {
  //   dispatch(actions.fetchData({ postId: 5 }));
  // }, []);

  const handleFetchData = () => {
    console.log("handleFetchData here...", Math.abs(counter));
    dispatch(actions.fetchData({ postId: Math.abs(counter) }));
  };

  const handleIncrementCounter = () => {
    dispatch(actions.incrementCounter({ value: 1 }));
  };

  const handleDecrementCounter = () => {
    dispatch(actions.decrementCounter({ value: 1 }));
  };

  return (
    <div className="container-outer">
      <h1>{counter}</h1>
      <button onClick={handleIncrementCounter}>ADD 1</button>
      <button onClick={handleDecrementCounter}>SUBTRACT 1</button>
      <div className="spacer10" />
      <button onClick={handleFetchData}>Fetch Data By Counter Value</button>
      <h1>{postTitle}</h1>
    </div>
  );
};

export default App;
