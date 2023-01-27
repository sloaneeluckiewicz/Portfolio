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
                        I graduated from the University of South Carolina with a B.S. in Integrated Information Technology
                        and a leadership distinction in Professional and Civic Engagement. I enjoy front-end development and cybersecurity. 
                    </p>
                    <p> 
                        When I am not programming my hobbies include:
                        <ul>
                            <li>yoga</li>
                            <li>gymnastics</li>
                            <li>reading</li>
                            <li>meditating</li>
                        </ul>
                    </p>
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
