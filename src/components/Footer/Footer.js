// import styles from './Footer.module.scss';
import Clock from './Clock';

const Footer = () => {
  return (
    <footer 
    // className={styles.Footer}
    >
      <Clock />
      <p>&copy; 2021 <a href="http://cecilezhang.com">xixi</a></p>
    </footer>
  )
}

export default Footer;