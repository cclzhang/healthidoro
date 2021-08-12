import { useState } from 'react';
import { Link } from 'react-router-dom';

const SettingsHealthidoro = () => {
  const [isStandardWorkday, setIsStandardWorkday] = useState(true);
  const buttonHandler = (e, setButtonState, buttonState) => {
    e.preventDefault();
    setButtonState(!buttonState);
  }

  return (
    <li>
      <Link to='/basic'>change to pomobasic</Link>
      <button onClick={e => buttonHandler(e, setIsStandardWorkday, isStandardWorkday)}>
        {isStandardWorkday ? "workday = pomos + break" : "workday = pomo only"}
      </button>
    </li>
  )
}

export default SettingsHealthidoro;