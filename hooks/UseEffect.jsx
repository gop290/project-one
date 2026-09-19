import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function UseEffect() {
  const [cont, setCount] = useState(0);
  useEffect(() => {
    console.log("Updating");
  }, [cont]);
  return (
    <div>
      You Clicked {cont} times {""}
      <button onClick={() => setCount(cont + 1)}>Increment</button>
    </div>
  );
}

export default UseEffect;
