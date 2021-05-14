import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./actions/actions";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchData());
  }, []);

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
    </div>
  );
};

export default App;
