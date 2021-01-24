import "./Settings.scss";
import CloseIcon from "../icon-close.svg";

const Settings = ({toggleModal}) => {
  return (
    <>
      <div className="settings-container">
        <div className="header">
          <h2>Settings</h2>
          <img src={CloseIcon} alt="Close" onClick={toggleModal}/>
        </div>
        <div className="time"></div>
        <div className="font"></div>
        <div className="color"></div>
      </div>
      <button className="apply">Apply</button>
    </>
  );
};

export default Settings;
