

const SetTimer = ({setTimerMode}) => {
  return (
    <main>
      <button onClick={() => setTimerMode('complete')}>set Workday</button>
    </main>
  )
}

export default SetTimer;