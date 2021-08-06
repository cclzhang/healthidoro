import logo from '../../assets/healthidoro-logo.png';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo which is a coral lotus flower" className="logo" />
      <h1>Healthidoro</h1>
    </header>
  )
}

export default Header;