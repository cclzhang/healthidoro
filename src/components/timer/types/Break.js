
import { Fragment } from "react";
import { useState, useEffect } from "react";

const Break = ({ 
  timerType, setTimerType, breakLengthLong, breakLengthShort, 
  isAutoPomo, setIsPomoDone, breakType, isAutoBreak, isBreakDone, setIsBreakDone
}) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);

  const handleGoPomoButton = (e) => {
    e.preventDefault();
    setTimerType('pomo');
    setIsBreakDone(false);
  }

  let interval = null;
  useEffect(() => {

    if (isActive) {
      interval = setInterval(() => {
        if (timerType === 'longBreak' && breakLengthLong - (seconds + 1) < 0) {
          setIsBreakDone(true);
          setIsActive(false);
          setIsPomoDone(false);
          setSeconds(0);
          if(isAutoPomo) {
            setTimerType('pomo');
          }

        } else if (timerType === 'shortBreak' && breakLengthShort - (seconds + 1) < 0) {
          setIsBreakDone(true);
          setIsActive(false);
          setIsPomoDone(false);
          setSeconds(0);
          
          if(isAutoPomo) {
            setTimerType('pomo');
          }

        } else {
          setSeconds(seconds => seconds + 1);

        }
      }, 1000);
      return () => clearInterval(interval);
    }

  }, [timerType, isActive, seconds]);

  const switchCase = (timerType) => {
    switch (timerType) {
      case 'shortBreak':
        return <h4>it's time to give your eyes a break</h4>
      case 'longBreak':
        return <h4>it's time to go for a walk</h4>
      default:
        return null;
    }
  }

  return (
    <Fragment>
      {switchCase(timerType)}
      {isBreakDone && !isAutoPomo
        ? (
        <Fragment>
          <p>break time's up</p>
          <button onClick={e => handleGoPomoButton(e, breakType)}>go to pomo</button>
        </Fragment>
        )
        : <p>{breakLengthShort - seconds}seconds of breaktime left</p>
      }
    </Fragment>
  )
}

export default Break;