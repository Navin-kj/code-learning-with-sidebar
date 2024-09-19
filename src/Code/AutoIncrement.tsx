/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";

export const AutoCounter = () => {
  const [count, setCount] = useState(0);
  const [pause, setPause] = useState(true);
  const intervalRef = useRef<any>(null);
  useEffect(() => {
    if (!pause) {
      startTimer();
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  });
  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    if (pause) {
      setPause(false);
    }
  };
  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setCount(0);
  };
  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setPause(true);
  };
  return (
    <div className="auto-increment">
      <h3>Auto Increment</h3>
      <p>{count}</p>
      <div
        style={{
          display: "flex",
          gap: "15px",
        }}
      >
        <button
          style={{ color: `${pause ? "green" : "red"}` }}
          onClick={pause ? startTimer : stopTimer}
        >
          {pause ? "Start" : "Stop"}
        </button>
        <button onClick={() => resetTimer()}>Reset</button>
      </div>
    </div>
  );
};
