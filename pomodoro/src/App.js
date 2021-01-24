import React, { useState, useEffect } from "react";
import "./App.scss";
import Timer from "./Components/Timer";
import CategoryNav from "./Components/CategoryNav";

const App = () => {
  // Define States
  const [duration, setDuration] = useState(1500);
  const [seconds, setSeconds] = useState(duration);
  const [running, setRunning] = useState(false);
  const [category, setCategory] = useState(1); // 1 = pomodoro, 2 = short break, 3 = long break

  // Reset the timer to the start value
  function reset() {
    setSeconds(duration);
    setRunning(false);
  }

  // Count down the timer:
  useEffect(() => {
    let interval = null;
    if (running && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else {
      setRunning(false);
      clearInterval(interval);
    }
    return () => clearInterval(interval); // This is run when it is time to clean up
  }, [running, seconds]);

  return (
    <div className="page">
      <CategoryNav changeCategory={(cat) => setCategory(cat)} category={category} />
      <Timer
        seconds={seconds}
        toggleRunning={() => setRunning(!running)}
        running={running}
        reset={reset}
        duration={duration}
      />
      {/* logo */}
      {/* Category Selection (pomodoro, short break, long break) */}
      {/* timer */}
      {/* settings button */}
    </div>
  );
};

export default App;
