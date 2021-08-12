import { useState, useEffect } from "react";
import Pomo from './types/Pomo';
import ShortBreak from './types/ShortBreak';
import LongBreak from './types/LongBreak';
import TimerDisplay from "./TimerDisplay";

const Timer = ({
  setTimerMode, 
  hrsInit, minsInit, secsInit, 
  pomoLength, breakLengthShort, breakLengthLong, longBreakInterval
}) => {

  const [timerType, setTimerType] = useState('pomo');

  const [hrs, setHrs] = useState(parseInt(hrsInit));
  const [mins, setMins] = useState(parseInt(minsInit));
  const [secs, setSecs] = useState(parseInt(secsInit));
  const workdayLength = parseInt(hrsInit) * 3600 + parseInt(minsInit) * 60 + parseInt(secsInit);

  const switchCase = (timerType) => {
    switch (timerType) {
      case 'pomo':
        return <Pomo
          setTimerMode={setTimerMode}
          timerType={timerType}
          setTimerType={setTimerType}

          hrs={hrs}
          mins={mins}
          secs={secs}
          setHrs={setHrs}
          setMins={setMins}
          setSecs={setSecs}

          workdayLength={workdayLength}
          pomoLength={pomoLength}
          longBreakInterval={longBreakInterval}
        />
      case 'shortBreak':
        return <ShortBreak
          timerType={timerType}
          setTimerType={setTimerType}
          breakLengthShort={breakLengthShort}
        />
      case 'longBreak':
        return <LongBreak
          timerType={timerType}
          setTimerType={setTimerType}
          breakLengthLong={breakLengthLong}
        />
    }
  }

  return (
    <main>
      <TimerDisplay 
        hrs={hrs}
        mins={mins}
        secs={secs}
      />
      {switchCase(timerType)}
    </main>
  )

}

export default Timer;