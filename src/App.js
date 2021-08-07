import './App.scss';
import Header from './components/Header/Header';
import Healthidoro from './pages/Healthidoro/Healthidoro';
import Pomobasic from './pages/Pomobasic/Pomobasic';
import Info from './components/Info/Info';
import Settings from './components/Settings/Settings';
import Footer from './components/Footer/Footer';
import { Switch, Route } from 'react-router-dom';
import { Dialog } from '@material-ui/core';



function App() {
  // const [isInfoOpen, setInfoOpen]
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/' component={Healthidoro} exact />
        <Route path='/pomo' component={Pomobasic} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
