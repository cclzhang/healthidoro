import logo from '../../assets/healthidoro-logo.png';
import { GearIcon, LightBulbIcon } from '@primer/octicons-react';
import Info from '../Info/Info';
import Settings from '../Settings/Settings';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo which is a coral lotus flower" className="logo" />
      <h1>Healthidoro</h1>
      <ul>
        <li>
          <button>
            <GearIcon size={24} />
          </button>
        </li>
        <li>
          <button>
            <LightBulbIcon size={24} />
          </button>
        </li>
      </ul>
    </header>
  )
}

export default Header;