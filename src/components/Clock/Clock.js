
import { useEffect, useState } from 'react';

const Clock = () => {
  const [clockHr, setClockHr] = useState(new Date().getHours());
  const [clockMin, setClockMin] = useState(new Date().getMinutes());

  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      if (new Date().getHours() < 10) {
        setClockHr(`0${new Date().getHours()}`);
      } else {
        setClockHr(new Date().getHours());
      }

      if (new Date().getMinutes() < 10) {
        setClockMin(`0${new Date().getMinutes()}`);
      } else {
        setClockMin(new Date().getMinutes());
      }

    }, 1000)
    return (() => clearInterval(interval))
  }, [clockMin, clockHr])

  return <p className="time">{`${clockHr}:${clockMin}`}</p>;
}

export default Clock;
