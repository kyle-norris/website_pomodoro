import React from "react";
import "./CategoryNav.scss";

const CategoryNav = () => {
  return (
    <div className="category-container">
      <div className="category-selector"></div>
      <p>pomodoro</p>
      <p className="selected">short break</p>
      <p>long break</p>
    </div>
  );
};

export default CategoryNav;
