import React, { useState, useEffect } from "react";
import ProgressBar from "react-customizable-progressbar";
import "./Timer.scss";

const Timer = ({seconds, running, toggleRunning, reset, duration}) => {
  // Set States
  // const [duration, setDuration] = useState(1500);
  // const [seconds, setSeconds] = useState(duration);
  // const [running, setRunning] = useState(false);

  // // Timer Functions
  // function toggleRunning() {
  //   setRunning(!running);
  // }

  // function reset() {
  //   setSeconds(duration);
  //   setRunning(false);
  // }

  // Calculate the percentage of progress for the circle progress bar
  function getProgress() {
    let min = Number(getMinutes());

    if (min < duration / 60 && seconds !== 0) {
      min++;
      let totalMin = Math.trunc(duration / 60);
      let percentage = (min / totalMin) * 100;
      return percentage;
    } else if (seconds === 0) {
      return 0;
    } else {
      return 100;
    }
  }

  // Format minutes to 2 digits:
  function getMinutes() {
    let m = 0;
    m = Math.trunc(seconds / 60);
    m = ("00" + m).slice(-2);

    return m;
  }

  // Format seconds to 2 digits:
  function getSeconds() {
    let s = 0;
    s = Math.trunc(seconds % 60);
    s = ("00" + s).slice(-2);

    return s;
  }

  // // Set interval to count down:
  // useEffect(() => {
  //   let interval = null;
  //   if (isRunning && seconds > 0) {
  //     interval = setInterval(() => {
  //       setSeconds((seconds) => seconds - 1);
  //     }, 1000);
  //   } else {
  //     setRunning(false);
  //     clearInterval(interval);
  //   }
  //   return () => clearInterval(interval); // This is run when it is time to clean up
  // }, [running, seconds]);

  return (
    <div className="countdown-container">
      <ProgressBar
        radius={163}
        progress={getProgress()}
        initialAnimation={true}
        trackStrokeColor={'transparent'}
        strokeColor={'#F87070'}
        strokeWidth={11}
        className="progress-bar"
      >
        <div className="inside-bar" onDoubleClick={reset}>
          <h1 className="remaining-time">
            {getMinutes()}:{getSeconds()}
          </h1>
          {running || seconds > 0 ? (
            <h3 onClick={toggleRunning}>
              {running ? "PAUSE" : "START"}
            </h3>
          ) : (
            <h3 onClick={reset}>RESTART</h3>
          )}
        </div>
      </ProgressBar>
    </div>
  );
};

export default Timer;
