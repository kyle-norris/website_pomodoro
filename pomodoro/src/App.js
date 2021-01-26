import React, { useState, useEffect } from "react";
import "./App.scss";
import Timer from "./Components/Timer";
import CategoryNav from "./Components/CategoryNav";
import Settings from "./Components/Settings";
import Logo from "./logo.svg";
import GearIcon from "./icon-settings.svg";

const App = () => {
  // Define States
  const [duration, setDuration] = useState(1500);
  const [seconds, setSeconds] = useState(duration);
  const [running, setRunning] = useState(false);
  const [category, setCategory] = useState(1); // 1 = pomodoro, 2 = short break, 3 = long break
  const [settings, setSettings] = useState({
    time_pom: 25,
    time_short: 5,
    time_long: 15,
  });
  const [showModal, setShowModal] = useState(false);

  // Reset the timer to the start value
  function reset() {
    setSeconds(duration);
    setRunning(false);
  }

  // Set the state and change the timer
  function changeCategory(cat) {
    console.log("changing category...");
    if (cat === 1) {
      setDuration(settings.time_pom * 60);
      setSeconds(settings.time_pom * 60);
    } else if (cat === 2) {
      setDuration(settings.time_short * 60);
      setSeconds(settings.time_short * 60);
    } else if (cat === 3) {
      setDuration(settings.time_long * 60);
      setSeconds(settings.time_long * 60);
    }

    setCategory(cat);
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
  }, [duration, running]);

  useEffect(() => {
    changeCategory(category);
  }, [settings]);

  // Show Modal
  function toggleModal() {
    setShowModal(!showModal);
  }

  function handleNewSettings(newSettings) {
    setSettings(newSettings);
    toggleModal();
  }

  return (
    <div className="page">
      <img src={Logo} alt="Pomodoro" className="logo" />
      <CategoryNav
        changeCategory={(cat) => changeCategory(cat)}
        category={category}
      />
      <Timer
        seconds={seconds}
        toggleRunning={() => setRunning(!running)}
        running={running}
        reset={reset}
        duration={duration}
      />
      <img
        src={GearIcon}
        alt="Settings"
        className="settings-icon"
        onClick={toggleModal}
      />
      {showModal && (
        <Settings
          toggleModal={toggleModal}
          setSettings={(newSettings) => handleNewSettings(newSettings)}
          currentSettings={settings}
        />
      )}
    </div>
  );
};

export default App;
