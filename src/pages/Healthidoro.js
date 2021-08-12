import EmptyTimer from '../components/timer/EmptyTimer';
import SetTimer from '../components/timer/SetTimer';
import Timer from '../components/timer/Timer';

import { useState } from 'react';

const Healthidoro = ({ 
    pomoLength, setPomoLength, 
    breakLengthShort, setBreakLengthShort, 
    breakLengthLong, setBreakLengthLong, 
    longBreakInterval, setLongBreakInterval
  }) => {
    
  // timerModes: 'empty', 'inputting', 'complete', 'break'
  const [timerMode, setTimerMode] = useState('empty');
  const [hrsInit, setHrsInit] = useState('0');
  const [minsInit, setMinsInit] = useState('0');
  const [secsInit, setSecsInit] = useState('0');

  switch (timerMode) {
    case 'empty':
      return <EmptyTimer 
        setTimerMode={setTimerMode}
      />
    case 'inputting':
      return <SetTimer
        setTimerMode={setTimerMode}
        hrs={hrsInit}
        setHrs={setHrsInit}
        mins={minsInit}
        setMins={setMinsInit}
        secs={secsInit}
        setSecs={setSecsInit}
      />
    case 'complete':
      return <Timer 
        setTimerMode={setTimerMode}
        hrsInit={hrsInit}
        minsInit={minsInit}
        secsInit={secsInit}

        pomoLength={pomoLength}
        setPomoLength={setPomoLength}
        breakLengthShort={breakLengthShort}
        setBreakLengthShort={setBreakLengthShort}
        breakLengthLong={breakLengthLong}
        setBreakLengthLong={setBreakLengthLong}
        longBreakInterval={longBreakInterval}
        setLongBreakInterval={setLongBreakInterval}
      />
    default:
      return <EmptyTimer
        setTimerMode={setTimerMode}
      />
  }
}

export default Healthidoro;