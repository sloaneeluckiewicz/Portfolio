import styles from './styles.module.css';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { StartMenu } from './components/StartMenu/StartMenu';
import { About } from './components/About/About';


export const App = () => {
  const [mode, setMode] = useState('start');

  return (
    <div className={styles.main}>
      <Navbar />
      {mode === 'start' && <StartMenu onStartClick= {() => setMode('about')} /> }
      {mode === 'about' && <About onAboutClick= {() => setMode('projects')} /> }
      {mode === 'projects' && <>Projects</> }
    </div>
  );
};