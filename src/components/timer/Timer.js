import { useState, Fragment } from "react";
import Pomo from './types/Pomo';
import Break from './types/Break';
import TimerDisplay from "./TimerDisplay";

const Timer = ({
  setTimerMode, timerType, setTimerType,
  hrsInit, minsInit, secsInit, 
  pomoLength, breakLengthShort, breakLengthLong, longBreakInterval
}) => {

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
        return <Break
          timerType={timerType}
          setTimerType={setTimerType}
          breakLengthLong={breakLengthLong}
          breakLengthShort={breakLengthShort}
        />
      case 'longBreak':
        return <Break
          timerType={timerType}
          setTimerType={setTimerType}
          breakLengthLong={breakLengthLong}
          breakLengthShort={breakLengthShort}
        />
      default:
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
    }
  }

  return (
    <Fragment>
      <TimerDisplay 
        hrs={hrs}
        mins={mins}
        secs={secs}
      />
      {switchCase(timerType)}
    </Fragment>
  )

}

export default Timer;