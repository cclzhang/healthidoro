import { useState } from 'react';
import { Link } from 'react-router-dom';

const SettingsHealthidoro = () => {
  const [isStandardWorkday, setIsStandardWorkday] = useState(true);
  const changePomoModes = e => {
    e.preventDefault();
    setIsStandardWorkday(!isStandardWorkday);
  }

  return (
    <li>
      <Link to='/basic'>change to pomobasic</Link>
      <button onClick={changePomoModes}>
        {isStandardWorkday ? "workday = pomos + break" : "workday = pomo only"}
      </button>
    </li>
  )
}

export default SettingsHealthidoro;