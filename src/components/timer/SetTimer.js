

const SetTimer = ({ setTimerMode, hrs, setHrs, mins, setMins, secs, setSecs }) => {
  const hrsRegex = "^(1[0-6]|[1-9])$";
  const minsSecsRegex = "^[0-5]?[0-9]$";

  const handleInput = (e, regexType, timeUnitToSet) => {
    if (e.target.value.match(regexType)) {
      timeUnitToSet(e.target.value);
    }
    if (e.target.value === '') {
      timeUnitToSet('0');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(hrs) * 3600 + parseInt(mins) * 60 + parseInt(secs) === 0) {
      return alert("please enter a time");
    } 
    setTimerMode('complete');
  }

  return (
    <main>
      <form action="" onSubmit={handleSubmit}>
        <span>
          <input
            type="text"
            id="timerHr"
            placeholder="0"
            onChange={e => handleInput(e, hrsRegex, setHrs)}
            value={hrs === '0' ? '' : hrs}
          />
          <label htmlFor="timerHr">h</label>
        </span>
        <span>
          <input
            type="text"
            id="timerMin"
            placeholder='0'
            onChange={e => handleInput(e, minsSecsRegex, setMins)}
            value={mins === '0' ? '' : mins}
          />
          <label htmlFor="timerMin">m</label>
        </span>
        <span>
          <input
            type="text"
            id="timerSec"
            placeholder='0'
            onChange={e => handleInput(e, minsSecsRegex, setSecs)}
            value={secs === '0' ? '' : secs}
          />
          <label htmlFor="timerSec">s</label>
        </span>
        <button type="submit">set Workday</button>
      </form>
    </main>
  )
}

export default SetTimer;