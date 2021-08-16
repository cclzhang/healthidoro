import EmptyTimer from '../components/timer/EmptyTimer';
import SetTimer from '../components/timer/SetTimer';
import Timer from '../components/timer/Timer';
import MusicPlayer from '../components/timer/MusicPlayer';

import { useState, useEffect } from 'react';

const Healthidoro = ({ 
    setIsHealthidoro,
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

  const [timerType, setTimerType] = useState('pomo');

  useEffect(() => {
    setIsHealthidoro(true);
  })

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
      return (
        <main>
          <Timer 
            setTimerMode={setTimerMode}
            hrsInit={hrsInit}
            minsInit={minsInit}
            secsInit={secsInit}

            timerType={timerType}
            setTimerType={setTimerType}

            pomoLength={pomoLength}
            setPomoLength={setPomoLength}
            breakLengthShort={breakLengthShort}
            setBreakLengthShort={setBreakLengthShort}
            breakLengthLong={breakLengthLong}
            setBreakLengthLong={setBreakLengthLong}
            longBreakInterval={longBreakInterval}
            setLongBreakInterval={setLongBreakInterval}
          />
          {timerType !== 'pomo' ? <MusicPlayer timerType={timerType} /> : null}
        </main>
      )
    default:
      return <EmptyTimer
        setTimerMode={setTimerMode}
      />
  }
}

export default Healthidoro;