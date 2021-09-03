import logo from '../../assets/healthidoro-logo.png';
import { GearIcon, LightBulbIcon } from '@primer/octicons-react';

const Header = ({isHealthidoro, handleInfoClick, handleSettingsClick}) => {

  return (
    <header 
    // className={styles.Header}
    >
      {/* <source media="(max-width: 799px)" srcset="elva-480w.jpg">
      <source media="(min-width: 800px)" srcset="elva-800w.jpg">
      <img src="elva-800w.jpg"> */}
      <img src={logo} alt="logo which is a coral lotus flower" className="logo" />
      <h1>
        {isHealthidoro ? "Healthidoro" : "Pomobasic"}
      </h1>

      <ul>
        <li>
          <button onClick={handleInfoClick}>
            <LightBulbIcon size={24} />
          </button>
        </li>
        <li>
          <button onClick={handleSettingsClick}>
            <GearIcon size={24} />
          </button>
        </li>
      </ul>

    </header>
  )
}

export default Header;