import { useState } from 'react';

const SettingsHealthidoro = () => {
  const [isStandardWorkday, setIsStandardWorkday] = useState(true);
  const buttonHandler = (e, setButtonState, buttonState) => {
    e.preventDefault();
    setButtonState(!buttonState);
  }

  return (
    <li>
      <button onClick={e => buttonHandler(e, setIsStandardWorkday, isStandardWorkday)}>
        {isStandardWorkday ? "workday = pomos + break" : "workday = pomo only"}
      </button>
    </li>
  )
}

export default SettingsHealthidoro;