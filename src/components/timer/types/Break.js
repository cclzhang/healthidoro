
import { useState, useEffect, Fragment } from "react";
import MusicPlayer from '../MusicPlayer';

const Break = ({ timerType, setTimerType, breakLengthLong, breakLengthShort }) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);

  let interval = null;
  useEffect(() => {

    if (isActive) {
      interval = setInterval(() => {
        if (timerType === 'longBreak' && breakLengthLong - (seconds + 1) === 0) {
          setIsActive(false);
          setTimerType('pomo');
          setSeconds(0);
        } else if (timerType === 'shortBreak' && breakLengthShort - (seconds + 1) === 0) {
          setIsActive(false);
          setTimerType('pomo');
          setSeconds(0);
        } else {
          setSeconds(seconds => seconds + 1);
        }
      }, 1000);
      return () => clearInterval(interval);
    }

  }, [timerType, isActive, seconds]);

  return (
    {
      'longBreak': (
        <div>
          <h4>it's time to go for a walk</h4>
          <p>{breakLengthLong - seconds}seconds of breaktime left</p>
        </div>
      ), 
      'shortBreak': (
        <div>
          <h4>it's time to give your eyes a break</h4>
          <p>{breakLengthShort - seconds}seconds of breaktime left</p>
        </div>
      ), 
    }[timerType]
  )
}

export default Break;