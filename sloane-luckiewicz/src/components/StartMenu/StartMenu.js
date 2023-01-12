import { Introduction } from '../Introduction/Introduction';
import styles from './styles.module.css';


export const StartMenu = ({ onStartClick }) => {
    return (
    <div>
        <Introduction />
        <div>
            <button className={styles.startButton} onClick={onStartClick}>
                Click to see my projects!
            </button> 
        </div>
        
    </div>
    );
};