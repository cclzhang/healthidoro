import './App.scss';
import Header from './components/header/Header';
import Healthidoro from './pages/Healthidoro';
import Pomobasic from './pages/Pomobasic';
import Info from './components/header/Info';
import Settings from './components/header/Settings';
import Footer from './components/footer/Footer';

import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';


function App() {
  const [isHealthidoro, setIsHealthidoro] = useState(true);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const [isMusicOnBreak, setIsMusicOnBreak] = useState(true);
  const [isAutoBreak, setIsAutoBreak] = useState(true);
  const [isAutoPomo, setIsAutoPomo] = useState(true);
  const [isBreakAlert, setIsBreakAlert] = useState(true);

  const [pomoLength, setPomoLength] = useState(3);
  const [breakLengthShort, setBreakLengthShort] = useState(3);
  const [breakLengthLong, setBreakLengthLong] = useState(6);
  const [longBreakInterval, setLongBreakInterval] = useState(3);

  return (
    <div className="App">
      <Header 
        isHealthidoro={isHealthidoro}
        handleInfoClick={() => setIsInfoOpen(true)} 
        handleSettingsClick={() => setIsSettingsOpen(true)}
      />

      <Switch>
        <Route path="/basic" render={() => (
          <Pomobasic
            setIsHealthidoro={setIsHealthidoro}
            pomoLength={pomoLength}
            setPomoLength={setPomoLength}
            breakLengthShort={breakLengthShort}
            setBreakLengthShort={setBreakLengthShort}
            breakLengthLong={breakLengthLong}
            setBreakLengthLong={setBreakLengthLong}
            longBreakInterval={longBreakInterval}
            setLongBreakInterval={setLongBreakInterval}
          />
        )} />
        <Route path="/" render={() => (
          <Healthidoro 
            setIsHealthidoro={setIsHealthidoro}
            pomoLength={pomoLength}
            setPomoLength={setPomoLength}
            breakLengthShort={breakLengthShort}
            setBreakLengthShort={setBreakLengthShort}
            breakLengthLong={breakLengthLong}
            setBreakLengthLong={setBreakLengthLong}
            longBreakInterval={longBreakInterval}
            setLongBreakInterval={setLongBreakInterval}

            isMusicOnBreak={isMusicOnBreak}
            isAutoBreak={isAutoBreak}
            isAutoPomo={isAutoPomo}
            isBreakAlert={isBreakAlert}
          />
        )} />
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

        isMusicOnBreak={isMusicOnBreak}
        setIsMusicOnBreak={setIsMusicOnBreak}
        isAutoBreak={isAutoBreak}
        setIsAutoBreak={setIsAutoBreak}
        isAutoPomo={isAutoPomo}
        setIsAutoPomo={setIsAutoPomo}
        isBreakAlert={isBreakAlert}
        setIsBreakAlert={setIsBreakAlert}
      />

      <Footer />
    </div>
  );
}

export default App;
