import TimerDisplay from './TimerDisplay';

const EmptyTimer = ({setTimerMode}) => {
  // timerModes: 'empty', 'inputting', 'complete', 'break'
  return (
    <main>
      <TimerDisplay />
      <button onClick={() => setTimerMode('inputting')}>add workday</button>
    </main>
  )
}

export default EmptyTimer;