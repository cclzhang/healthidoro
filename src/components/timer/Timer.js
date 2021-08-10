

const Timer = ({setTimerMode}) => {
  return (
    <main>
      <button onClick={() => setTimerMode('empty')}>stop</button>
    </main>
  )
}

export default Timer;