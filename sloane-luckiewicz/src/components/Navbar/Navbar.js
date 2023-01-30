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
            <a href='StartMenu.js'>Home</a>
          </li>
          <li>
            <a href='About.js'>About</a>
          </li>
          <li>
            <a href='Projects.js'>Projects</a>
          </li>
        </ul>
      </div>
    </nav>
    
  );
}