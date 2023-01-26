import styles from './styles.module.css';


export const StartMenu = ({ onStartClick }) => {
    return (
    <body>
        <main className={styles.flexContainer}>
            <div>
                <p>This is my slideshow</p>
            </div>
            <div>
                <h3>Hello, my name is</h3>
                <h1>Sloane Luckiewicz</h1>
                <body>
                    <p>USC B.S. IIT</p>
                </body>
                    <button className={styles.startButton} onClick={onStartClick}>
                        Click to see my projects!
                    </button> 
            </div>
        </main>
    </body>
    );
};


/*

<button className={styles.startButton} onClick={onStartClick}>
    Click to see my projects!
</button> 

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
*/
