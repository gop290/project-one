import React, { useMemo, useState } from "react";
import UseMeomSub from "./useMeomSub";

function UseMemo() {
  const [count, setcount] = useState(0);
  function clickHandel() {
    setcount(count + 1);
  }
  const subchild = useMemo(() => {
    return <UseMeomSub />;
  }, []);
  return (
    <div>
      <h3>Count:{count}</h3>
      <button onClick={clickHandel}>Increment</button>
      {subchild}
    </div>
  );
}

export default UseMemo;
