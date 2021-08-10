import EmptyTimer from '../components/timer/EmptyTimer';
import SetTimer from '../components/timer/SetTimer';
import Timer from '../components/timer/Timer';
import BreakTimer from '../components/timer/BreakTimer';

import { useState } from 'react';

const Healthidoro = () => {
  // timerModes: 'empty', 'inputting', 'complete', 'break'
  const [timerMode, setTimerMode] = useState('empty');

  switch (timerMode) {
    case 'empty':
      return <EmptyTimer 
        setTimerMode={setTimerMode}
      />
    case 'inputting':
      return <SetTimer
        setTimerMode={setTimerMode}
      />
    case 'complete':
      return <Timer 
        setTimerMode={setTimerMode}
      />
    case 'break':
      return <BreakTimer 
        setTimerMode={setTimerMode}
      />
    default:
      return <EmptyTimer 
        setTimerMode={setTimerMode}
      />
  }
}

export default Healthidoro;