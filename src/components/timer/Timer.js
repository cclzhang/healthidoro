import { useState, Fragment } from "react";
import Pomo from './types/Pomo';
import Break from './types/Break';
import TimerDisplay from "./TimerDisplay";

const Timer = ({
  setTimerMode, timerType, setTimerType,
  hrsInit, minsInit, secsInit, 
  pomoLength, breakLengthShort, breakLengthLong, longBreakInterval, 
  isAutoBreak, isAutoPomo, isBreakAlert, 
}) => {

  const [hrs, setHrs] = useState(parseInt(hrsInit));
  const [mins, setMins] = useState(parseInt(minsInit));
  const [secs, setSecs] = useState(parseInt(secsInit));
  const workdayLength = parseInt(hrsInit) * 3600 + parseInt(minsInit) * 60 + parseInt(secsInit);

  const [isPomoDone, setIsPomoDone] = useState(false);
  const [isBreakDone, setIsBreakDone] = useState(false);
  const [breakType, setBreakType] = useState("shortBreak");

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

          isAutoBreak={isAutoBreak}
          isAutoPomo={isAutoPomo}
          isBreakAlert={isBreakAlert}

          isPomoDone={isPomoDone}
          setIsPomoDone={setIsPomoDone}
          isBreakDone={isBreakDone}
          setIsBreakDone={setIsBreakDone}

          breakType={breakType}
          setBreakType={setBreakType}
        />
      case 'shortBreak':
        return <Break
          timerType={timerType}
          setTimerType={setTimerType}
          breakLengthLong={breakLengthLong}
          breakLengthShort={breakLengthShort}

          isAutoPomo={isAutoPomo}
          setIsPomoDone={setIsPomoDone}
          isBreakDone={isBreakDone}
          setIsBreakDone={setIsBreakDone}
          breakType={breakType}
          isAutoBreak={isAutoBreak}
        />
      case 'longBreak':
        return <Break
          timerType={timerType}
          setTimerType={setTimerType}
          breakLengthLong={breakLengthLong}
          breakLengthShort={breakLengthShort}

          isAutoPomo={isAutoPomo}
          setIsPomoDone={setIsPomoDone}
          isBreakDone={isBreakDone}
          setIsBreakDone={setIsBreakDone}
          breakType={breakType}
          isAutoBreak={isAutoBreak}
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