import { useSelector, useDispatch } from "react-redux";
import * as actions from "./actions/actions";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrementCounter = () => {
    console.log("handleIncrementCounter here...");
    dispatch(actions.incrementCounter({ value: 1 }));
  };

  const handleDecrementCounter = () => {
    console.log("handleDecrementCounter here...");
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
