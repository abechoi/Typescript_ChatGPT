import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Link href='/'>
            <h1>ABE CHOI</h1>
          </Link>
        </div>
        <div className={styles.leftLinks}>
          <ul>
            <li>
              <Link href='/showcase'>Showcase</Link>
            </li>
            <li>
              <Link href='/services'>Services</Link>
            </li>
            <li>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
        <div className={styles.rightLinks}>
          <ul>
            <li>
              <Link href='/'>Github</Link>
            </li>
            <li>
              <Link href='/'>Etsy</Link>
            </li>
            <li>
              <Link href='/about'>Instagram</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
