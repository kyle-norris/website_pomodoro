import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [duration, setDuration] = useState(1500);
  const [seconds, setSeconds] = useState(duration);
  const [running, setRunning] = useState(true);

  function toggleRunning() {
    setRunning(!running);
  }

  function reset() {
    setSeconds(duration);
    setRunning(false);
  }

  // Update the number of seconds left:
  useEffect(() => {
    let interval = null;
    if (running) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval); // This is run when it is time to clean up
  }, [running, seconds]);

  function getMinutes() {
    let m = 0;
    m = Math.trunc(seconds / 60);
    m = ("00" + m).slice(-2);

    return m;
  }

  function getSeconds() {
    let s = 0;
    s = Math.trunc(seconds % 60);
    s = ("00" + s).slice(-2);

    return s;
  }

  return (
    <>
    <div className="time">
      {getMinutes()}:{getSeconds()}
    </div>
    <button onClick={toggleRunning}>
      toggle
    </button>
    <button onClick={reset}>
      reset
    </button>
      {/* logo */}
      {/* Category Selection (pomodoro, short break, long break) */}
      {/* timer */}
      {/* settings button */}
    </>
  );
};

export default App;
