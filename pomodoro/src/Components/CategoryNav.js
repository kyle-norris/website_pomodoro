import React from "react";
import "./CategoryNav.scss";

const CategoryNav = ({ changeCategory, category }) => {
  function getCategoryName() {
    if (category === 1) {
      return "pomodoro";
    } else if (category === 2) {
      return "short-break";
    } else if (category === 3) {
      return "long-break";
    }
  }

  return (
    <div className="category-container">
      <div className={`category-selector ${getCategoryName()}`}></div>
      <p className={category === 1 && "selected"} onClick={() => changeCategory(1)}>pomodoro</p>
      <p className={category === 2 && "selected"} onClick={() => changeCategory(2)}>short break</p>
      <p className={category === 3 && "selected"} onClick={() => changeCategory(3)}>long break</p>
    </div>
  );
};

export default CategoryNav;
