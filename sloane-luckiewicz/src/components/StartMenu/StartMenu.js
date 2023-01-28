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
                    <p>
                        Graduated from the University of South Carolina with a B.S. in Integrated Information Technology
                        and a leadership distinction in Professional and Civic Engagement. 
                        Apsiring web developer while implementing the best security protocols. 
                    </p>
                    <p> 
                        Check me out:
                        <ul>
                            <li><a href="https://drive.google.com/file/d/1Q1ochgQYGj9lDQb7rcfOiw1tiyYQ006t/view?usp=sharing">Resume</a></li>
                            <li><a href="https://www.linkedin.com/in/sloane-luckiewicz/">LinkedIn</a></li>
                            <li><a href="https://github.com/sloaneeluckiewicz">GitHub</a></li>
                            <li><a href="https://sloaneluckiewicz.wixsite.com/sloaneeluckiewicz">Graduation with Leadership Distinction (GLD)</a></li>
                            <li><a href="https://www.credly.com/users/sloane-luckiewicz.8985866f/badges">Certifications</a></li>
                        </ul>
                    </p>
                </body>
                <footer>
                    <button className={styles.startButton} onClick={onStartClick}>
                        Click to read about me!
                    </button>
                </footer> 
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
