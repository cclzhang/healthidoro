import './App.scss';
import Header from './components/header/Header';
import Healthidoro from './pages/Healthidoro';
import Pomobasic from './pages/Pomobasic';
import Info from './components/header/Info';
import Settings from './components/header/Settings';
import TimerStopAlertModal from './components/timer/TimerStopAlertModal';
import Footer from './components/footer/Footer';

import { Switch, Route } from 'react-router-dom';

import { useState } from 'react';


function App() {
  const [isHealthidoro, setIsHealthidoro] = useState(true);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isTimerStopAlertOpen, setIsTimerStopAlertOpen] = useState(false);

  return (
    <div className="App">
      <Header 
        handleInfoClick={() => setIsInfoOpen(true)} 
        handleSettingsClick={() => setIsSettingsOpen(true)}
      />

      <Switch>
        <Route path="/pomo" component={Pomobasic} />
        <Route path="/" component={Healthidoro} />
      </Switch>

      <Info 
        open={isInfoOpen}
        setOpen={setIsInfoOpen}
        isHealthidoro={isHealthidoro}
        setIsHealthidoro={setIsHealthidoro}
      />

      <Settings
        open={isSettingsOpen}
        setOpen={setIsSettingsOpen}
        isHealthidoro={isHealthidoro}
        setIsHealthidoro={setIsHealthidoro}
      />

      <button onClick={() => setIsTimerStopAlertOpen(true)}>test stop modal</button>
      <TimerStopAlertModal
        open={isTimerStopAlertOpen}
        setOpen={setIsTimerStopAlertOpen}
      />

      <Footer />
    </div>
  );
}

export default App;
