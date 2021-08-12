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

  const [pomoLength, setPomoLength] = useState(2);
  const [breakLengthShort, setBreakLengthShort] = useState(5);
  const [breakLengthLong, setBreakLengthLong] = useState(10);
  const [longBreakInterval, setLongBreakInterval] = useState(3);

  return (
    <div className="App">
      <Header 
        handleInfoClick={() => setIsInfoOpen(true)} 
        handleSettingsClick={() => setIsSettingsOpen(true)}
      />

      <Switch>
        <Route path="/basic" render={() => (
          <Pomobasic
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

      <Footer />
    </div>
  );
}

export default App;
