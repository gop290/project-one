import React, { useContext } from "react";
import { OwnerContext } from "../src/App";
import { Chaneel } from "../src/App";
function UseContext() {
  const owner = useContext(OwnerContext);
  const chaneel = useContext(Chaneel);
  return (
    <div>
      {owner} -{chaneel}{" "}
    </div>
  );
}

export default UseContext;
