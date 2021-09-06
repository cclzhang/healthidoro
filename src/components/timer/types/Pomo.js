import TimerStopAlertModal from "../TimerStopAlertModal";
import { useState, useEffect, Fragment } from "react";

const Pomo = ({
  setTimerMode, timerType, setTimerType, 
  hrs, mins, secs, setHrs, setMins, setSecs, 
  workdayLength, pomoLength, longBreakInterval, 
  isAutoBreak, isBreakAlert, isAutoPomo, 
  isPomoDone, setIsPomoDone, isBreakDone, setIsBreakDone, 
  breakType, setBreakType
}) => {
  const [isStopAlertOpen, setIsStopAlertOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleGoBreakButton = (e, breakType) => {
    e.preventDefault();
    setTimerType(breakType);
  }

  const handleStop = () => {
    setIsActive(false);
    setIsStopAlertOpen(true);
  }

  let interval = null;
  let counter;

  useEffect(() => {
    if (isActive) {
      interval = setInterval(() => {
        counter = hrs * 3600 + mins * 60 + secs - 1;
        
        if (isBreakAlert && workdayLength - counter > workdayLength - 3) {
          console.log(workdayLength - counter)
        }

        if ((workdayLength - counter) % (pomoLength * longBreakInterval) === 0 && counter > ((pomoLength * longBreakInterval) * 1.5)) {
          // break every hour and counter is bigger than 1h 30mins
          setIsActive(!isActive);
          if (isAutoBreak) {
            setTimerType('longBreak');
          } else {
            setIsPomoDone(true);
            setBreakType('longBreak');
          }
        } else if ((workdayLength - counter) % pomoLength === 0 && counter > (pomoLength * 1.5)) {
          // break every 20mins and counter is bigger than 30mins
          setIsActive(!isActive);
          if(isAutoBreak) {
            setTimerType('shortBreak');
          } else {
            setIsPomoDone(true);
            setBreakType('shortBreak');
          }
        } 

        // clear interval when timer reaches zero
        if (secs + mins + hrs === 0) {
          setIsActive(!isActive);
        } else if (secs > 0) {
          setSecs(secs => secs - 1);
        } else {
          // new seconds === 0 and newMins > 0
          if (mins > 0) {
            setMins(mins => mins - 1);
            setSecs(59);
          } else {
            // if newMins === 0 and newHrs > 0
            if (hrs > 0) {
              setHrs(hrs => hrs - 1);
              setMins(59);
              setSecs(59);
            }
          }
        }
      }, 1000)
    } else if (!isActive && !(secs + mins + hrs === 0)) {
      // when pause is clicked, stop interval
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [hrs, mins, secs, isActive]);

  return (
    <Fragment>
      {isPomoDone && !isAutoBreak
        ? <button onClick={e => handleGoBreakButton(e, breakType)}>go to break</button>
        : (
          <Fragment>
            <button onClick={() => setIsActive(!isActive)}>
              {isActive ? "pause" : "play"}
            </button>
            <button onClick={handleStop}>stop</button>
          </Fragment>
          )
      }
    
      <TimerStopAlertModal
        open={isStopAlertOpen}
        setOpen={setIsStopAlertOpen}
        setTimerMode={setTimerMode}
      />
    </Fragment>
  )
}

export default Pomo;