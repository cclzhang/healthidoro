import './App.scss';
import Header from './components/Header/Header';
import Healthidoro from './pages/Healthidoro/Healthidoro';
import Pomobasic from './pages/Pomobasic/Pomobasic';
import Info from './components/Info/Info';
import Settings from './components/Settings/Settings';
import Footer from './components/Footer/Footer';

import { Switch, Route } from 'react-router-dom';

import { useState } from 'react';


function App() {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <div className="App">
      <Header 
        handleInfoClick={() => setIsInfoOpen(true)} 
        handleSettingsClick={() => setIsSettingsOpen(true)}
      />
      <Switch>
        <Route path='/' component={Healthidoro} exact />
        <Route path='/pomo' component={Pomobasic} />
      </Switch>

      <Info 
        open={isInfoOpen}
        setOpen={setIsInfoOpen}
      />
      <Settings
        open={isSettingsOpen}
        setOpen={setIsSettingsOpen}
      />
      <Footer />
    </div>
  );
}

export default App;
