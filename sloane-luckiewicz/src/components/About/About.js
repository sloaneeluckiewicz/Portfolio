import styles from './styles.module.css';
import { TypeWriter } from '../TyperWriter/TypeWriter';

export const About = ({ onAboutClick }) => {
    return (
    <body>
        <main className={styles.flexContainer}>
            <div>
                <TypeWriter />
            </div>
                <body>
                    <p>
                        <ul>
                            <li>I grew up outside of Pittsburgh, PA</li>
                            <li>I am one of 5 siblings</li>
                            <li>I have a pet cat named Birdie and a pet tortoise named Monster Truck</li>
                            <li>I am a part-time gymnastics teacher</li>
                            <li>I am obsessed with yoga and pilates</li>
                            <li>I love to read, check out my book blog</li>
                            <li>I like to learn about history</li>
                        </ul>
                    </p>
                </body>
                <aside>
                    <p>images of things like family and animals</p>
                </aside>
                <footer>
                    <button className={styles.startButton} onClick={onAboutClick}>
                        Click to view my work!
                    </button>
                </footer> 
        </main>
    </body>
    );
};
