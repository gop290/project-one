import { useEffect, useRef, useState } from "react";

function TimerwithRef() {
  const [timer, setTimer] = useState(0);
  const intervalref = useRef(null);

  useEffect(() => {
    intervalref.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(intervalref.current);
    };
  }, []);
  console.log(Notification.permission);
  return (
    <div>
      <div>Timer - {timer}</div>
      <button onClick={() => clearInterval(intervalref.current)}>
        Stop Timer
      </button>
    </div>
  );
}

export default TimerwithRef;
