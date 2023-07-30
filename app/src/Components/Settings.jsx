import "./Settings.scss";
import CloseIcon from "../assets/icon-close.svg";
import NumberSelector from "./NumberSelector";
import { useState, useRef } from "react";
import PropTypes from "prop-types";

const Settings = ({
  toggleModal,
  setSettings,
  currentSettings,
  setFont,
  currentFont,
  currentColor,
  setColor,
}) => {
  const [fontSelection, setFontSelection] = useState(currentFont);
  const [colorSelection, setColorSelection] = useState(currentColor);

  const number_pom = useRef();
  const number_short = useRef();
  const number_long = useRef();

  // Functiont to handle Form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the new settings object with the form's values:
    var newTimeSettings = {
      time_pom: Number(number_pom.current.value),
      time_short: Number(number_short.current.value),
      time_long: Number(number_long.current.value),
    };

    setFont(fontSelection);
    setColor(colorSelection);
    setSettings(newTimeSettings);
  };

  return (
    <form className="settings-form">
      <div className="settings-container">
        <div className="header">
          <h2>Settings</h2>
          <img src={CloseIcon} alt="Close" onClick={toggleModal} />
        </div>
        <div className="time">
          <h4>Time (Minutes)</h4>
          <p className="pom">pomodoro</p>
          <p className="short">short break</p>
          <p className="long">long break</p>
          <NumberSelector
            className="pom-num"
            refValue={number_pom}
            defaultValue={currentSettings.time_pom}
          />
          <NumberSelector
            className="short-num"
            refValue={number_short}
            defaultValue={currentSettings.time_short}
          />
          <NumberSelector
            className="long-num"
            refValue={number_long}
            defaultValue={currentSettings.time_long}
          />
        </div>
        <div className="font">
          <h4>Font</h4>
          <div className="font-container">
            <button
              type="button"
              className={
                fontSelection === 1 ? `font-1 font-selected` : "font-1"
              }
              onClick={() => setFontSelection(1)}
            >
              Aa
            </button>
            <button
              type="button"
              className={
                fontSelection === 2 ? `font-2 font-selected` : "font-2"
              }
              onClick={() => setFontSelection(2)}
            >
              Aa
            </button>
            <button
              type="button"
              className={
                fontSelection === 3 ? `font-3 font-selected` : "font-3"
              }
              onClick={() => setFontSelection(3)}
            >
              Aa
            </button>
          </div>
        </div>
        <div className="color">
          <h4>Color</h4>
          <div className="color-container">
            <button
              type="button"
              className={
                colorSelection === 1 ? `color-1 color-selected` : "color-1"
              }
              onClick={() => setColorSelection(1)}
            >
              &#10004;
            </button>
            <button
              type="button"
              className={
                colorSelection === 2 ? `color-2 color-selected` : "color-2"
              }
              onClick={() => setColorSelection(2)}
            >
              &#10004;
            </button>
            <button
              type="button"
              className={
                colorSelection === 3 ? `color-3 color-selected` : "color-3"
              }
              onClick={() => setColorSelection(3)}
            >
              &#10004;
            </button>
          </div>
        </div>
      </div>
      <button className="apply" type="submit" onClick={handleSubmit}>
        Apply
      </button>
    </form>
  );
};

export default Settings;

Settings.propTypes = {
  toggleModal: PropTypes.func,
  setSettings: PropTypes.func,
  currentSettings: PropTypes.object,
  setFont: PropTypes.func,
  currentFont: PropTypes.number,
  currentColor: PropTypes.number,
  setColor: PropTypes.func,
};
