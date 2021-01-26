import "./Settings.scss";
import CloseIcon from "../icon-close.svg";
import NumberSelector from "./NumberSelector";

const Settings = ({toggleModal}) => {
  return (
    <>
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
          <NumberSelector className="pom-num"/>
          <NumberSelector className="short-num"/>
          <NumberSelector className="long-num"/>
        </div>
        <div className="font">
          <h4>Font</h4>
          <div className="font-container">
            <button className="font-1">Aa</button>
            <button className="font-2">Aa</button>
            <button className="font-3">Aa</button>
          </div>
        </div>
        <div className="color">
          <h4>Color</h4>
          <div className="color-container">
            <button className="color-1 color-selected">&#10004;</button>
            <button className="color-2">&#10004;</button>
            <button className="color-3">&#10004;</button>
          </div>
        </div>
      </div>
      <button className="apply">Apply</button>
    </>
  );
};

export default Settings;
