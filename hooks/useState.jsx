import React from "react";
import { useState } from "react";

function UseState() {
  let [count, setCount] = useState(0);
  let style = {
    background: `rgb(${count},${count - 1},${count * 2})`,
  };
  return (
    <div style={style}>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
}

export default UseState;
