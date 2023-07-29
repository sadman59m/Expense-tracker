import react, { useState } from "react";

import "./SettingWheel.css";

const SettingWheel = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickedSettingHandler = () => {
    isSelected ? setIsSelected(false) : setIsSelected(true);
  };

  let settingBtnClassName = isSelected
    ? "setting-wheel-btn__selected "
    : "setting-wheel-btn";

  console.log(settingBtnClassName);
  return (
    <div className="setting-wheel">
      <button className={settingBtnClassName} onClick={clickedSettingHandler}>
        *
      </button>
    </div>
  );
};
export default SettingWheel;
