import React from "react";
import { useReducer } from "react";
const initialstate = 0;
let a = 20;
const reducer = (state, action) => {
  console.log(state, action);
  switch (action) {
    case "increment":
      return (state + 1, a++);

    case "decrement":
      return state - 1;
    case "reset":
      return initialstate;
    default:
      state;
  }
};
function UseReducer() {
  const [count, dispatch] = useReducer(reducer, initialstate);

  const Style = {
    fontSize: a,
  };
  return (
    <div>
      <div>
        <div>Count:{count}</div>
        <button onClick={() => dispatch("increment")}>+</button>
        <button onClick={() => dispatch("decrement")}>-</button>
        <button onClick={() => dispatch("reset")}>Reset</button>
        <h1 style={Style}>Hello</h1>
      </div>
    </div>
  );
}

export default UseReducer;
