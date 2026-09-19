import React, { useEffect } from "react";
let renderCount = 0;
function UseMeomSub() {
  useEffect(() => {
    renderCount++;
  });
  return <div>renderCount:{renderCount}</div>;
}

export default UseMeomSub;
