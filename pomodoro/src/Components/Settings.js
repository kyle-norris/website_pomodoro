import "./Settings.scss";
import CloseIcon from "../icon-close.svg";
import NumberSelector from "./NumberSelector";
import { useState, useRef } from "react";

const Settings = ({toggleModal, setSettings, currentSettings}) => {

  const number_pom = useRef(25);
  const number_short = useRef(5);
  const number_long = useRef(15);

  // Functiont to handle Form submission
  const handleSubmit = e => {
    e.preventDefault();
    console.log(number_pom.current.value);

    // Create the new settings object with the form's values:
    var newSettings = {
      time_pom: number_pom.current.value,
      time_short: number_short.current.value,
      time_long: number_long.current.value
    }

    setSettings(newSettings);
  }
  
  
  return (
    <form className="settings-form">
      <div className="settings-container">
        <div className="header">
          <h2>Settings</h2>
          <img src={CloseIcon} alt="Close" onClick={toggleModal}/>
        </div>
        <div className="time">
          <h4>Time (Minutes)</h4>
          <p className="pom">pomodoro</p>
          <p className="short">short break</p>
          <p className="long">long break</p>
          <NumberSelector className="pom-num" refValue={number_pom} defaultValue={currentSettings.time_pom}/>
          <NumberSelector className="short-num" refValue={number_short} defaultValue={currentSettings.time_short}/>
          <NumberSelector className="long-num" refValue={number_long} defaultValue={currentSettings.time_long}/>
        </div>
        <div className="font">
          <h4>Font</h4>
          <div className="font-container">
            <button type="button" className="font-1 font-selected">Aa</button>
            <button type="button" className="font-2">Aa</button>
            <button type="button" className="font-3">Aa</button>
          </div>
        </div>
        <div className="color">
          <h4>Color</h4>
          <div className="color-container">
            <button type="button" className="color-1 color-selected">&#10004;</button>
            <button type="button" className="color-2">&#10004;</button>
            <button type="button" className="color-3">&#10004;</button>
          </div>
        </div>
      </div>
      <button className="apply" type="submit" onClick={handleSubmit}>Apply</button>
    </form>
  );
};

export default Settings;
