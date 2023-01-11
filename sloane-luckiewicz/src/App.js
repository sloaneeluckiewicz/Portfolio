import styles from './styles.module.css';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { StartMenu } from './components/StartMenu/StartMenu';

export const App = () => {
  const [mode, setMode] = useState('start');

  return (
    <div className={styles.main}>
      <Navbar />
      {mode === 'start' && <StartMenu onStartClick= {() => setMode('about')} /> }
      {mode === 'about' && <> About </>}
      {mode === 'gameOver' && <> Game Over</> }
    </div>
  );
};