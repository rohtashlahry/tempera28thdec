// ToggleSwitch.tsx

import React, { useState } from 'react';
import './tempSwitch.css'; // Import your CSS file for styling

interface TempSwitchProps {
  onChange: (isChecked: boolean) => void;
  defaultChecked?: boolean;
}

const TempSwitch: React.FC<TempSwitchProps> = ({ onChange, defaultChecked = false }) => {
  const [isChecked, setChecked] = useState(defaultChecked);

  const handleToggle = () => {
    const newCheckedState = !isChecked;
    setChecked(newCheckedState);
    onChange(newCheckedState);
  };

  return (
  <div className='toggle_switch_container'>
    <div className={`toggle-switch ${isChecked ? 'checked' : ''}`} onClick={handleToggle}>
      <div className="toggle-slider"></div>
    </div>
  </div>
  );
};

export default TempSwitch;
