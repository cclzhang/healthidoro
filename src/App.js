import './App.scss';
import Header from './components/Header/Header';
import Healthidoro from './pages/Healthidoro/Healthidoro';
import Pomobasic from './pages/Pomobasic/Pomobasic';
import Footer from './components/Footer/Footer';
import { Switch, Route } from 'react-router-dom';

function App() {
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
