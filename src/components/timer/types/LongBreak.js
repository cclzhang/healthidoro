
import { useState, useEffect, Fragment } from "react";
import MusicPlayer from '../MusicPlayer';

const BreakTimer = ({ timerType, setTimerType, breakLengthLong }) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);

  let interval = null;
  useEffect(() => {

    if (isActive) {
      interval = setInterval(() => {
        if (breakLengthLong - (seconds + 1) === 0) {
          setIsActive(false);
          setTimerType('pomo');
          setSeconds(0);
        } else {
          setSeconds(seconds => seconds + 1);
          console.log(breakLengthLong, seconds)
        }
      }, 1000);
      return () => clearInterval(interval);
    }

  }, [timerType, isActive, seconds]);

  return (
    <Fragment>
      <h4> it's time to go for a walk </h4>

      <p>
        {breakLengthLong - seconds} secs of breaktime left
      </p>
      <MusicPlayer timerType={timerType} />
    </Fragment>
  )
}

export default BreakTimer;