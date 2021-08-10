
// function TimerDisplay({hrs, mins, secs}) {
function TimerDisplay() {
  // let hours = parseInt(hrs);
  // let minutes = parseInt(mins);
  // let seconds = parseInt(secs);
  let hrs = '0';
  let mins = '0';
  let secs = '0';

  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  if (hours < 10) {
    hours = '0' + hrs;
  }
  if (minutes < 10) {
    minutes = '0' + mins;
  }
  if (seconds < 10) {
    seconds = '0' + secs;
  }

  return (
    <p>{`${hours}:${minutes}:${seconds}`}</p>
  );
}

export default TimerDisplay;