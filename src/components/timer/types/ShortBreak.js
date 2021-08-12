
import { useState, useEffect, Fragment } from "react";
import MusicPlayer from '../MusicPlayer';

const BreakTimer = ({ timerType, setTimerType, breakLengthShort }) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);

  let interval = null;


  useEffect(() => {

    if (isActive) {
      interval = setInterval(() => {
        if (breakLengthShort - (seconds + 1) === 0) {
          setIsActive(false);
          setTimerType('pomo');
          setSeconds(0);
        } else {
          setSeconds(seconds => seconds + 1);
          console.log(breakLengthShort, seconds)
        }
      }, 1000);
      return () => clearInterval(interval);
    }

  }, [timerType, isActive, seconds]);

  return (
    <Fragment>
      <h4>time to relax your eyes</h4>
      <p>
        {breakLengthShort - seconds} secs of breaktime left
      </p>
      <MusicPlayer timerType={timerType}/>
    </Fragment>
  )
}

export default BreakTimer;