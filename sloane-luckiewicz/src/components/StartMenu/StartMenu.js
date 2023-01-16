import { Introduction } from '../Introduction/Introduction';
import styles from './styles.module.css';


export const StartMenu = ({ onStartClick }) => {
    return (
    <div>
        <aside>
            <img src='../images/portfoliopic.jpg' alt = ' me sitting down' />
        </aside>
        <main>
            <Introduction />
        <button className={styles.startButton} onClick={onStartClick}>
                Click to see my projects!
        </button> 
        </main>
        
    </div>
    );
};

