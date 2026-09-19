import React from "react";
import { useState } from "react";

function UseState2() {
  const initalvalue = 0;
  const [count, countupdate] = useState(initalvalue);
  return (
    <div>
      Count:{count}
      <button onClick={() => countupdate(initalvalue)}>Reset</button>
      <button onClick={() => countupdate(count + 1)}>Increment</button>
      <button onClick={() => countupdate(count - 1)}>Decrement</button>
    </div>
  );
}

export default UseState2;
