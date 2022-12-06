import styles from './styles.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navigation}>
      <a href="/" className={styles.brand}>
        Sloane Luckiewicz
      </a>
      <div
        className={styles.menu}>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
        </ul>
      </div>
    </nav>
    
  );
}