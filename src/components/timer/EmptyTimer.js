import TimerDisplay from './TimerDisplay';

const EmptyTimer = ({setTimerMode}) => {
  // timerModes: 'empty', 'inputting', 'complete', 'break'
  return (
    <main>
      <TimerDisplay 
        hrs='0'
        mins='0'
        secs='0'
      />
      <button onClick={() => setTimerMode('inputting')}>add workday</button>
    </main>
  )
}

export default EmptyTimer;