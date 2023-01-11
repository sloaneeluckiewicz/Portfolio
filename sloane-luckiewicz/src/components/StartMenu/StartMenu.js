import { Introduction } from '../Introduction/Introduction';
import styles from './styles.module.css';


export const StartMenu = ({ onStartClick }) => {
    return (
    <div className={styles.main}>
        <Introduction />
        
        <button className={styles.startButton} onClick={onStartClick}>
            Click to learn about me!
        </button>
        
    </div>
    );
};