import styles from './styles.module.css';
import { TypeWriter } from '../TyperWriter/TypeWriter';
import { Slideshow } from '../Slideshow/Slideshow';

export const About = ({ onAboutClick }) => {
    return (
    <body>
        <main className={styles.flexContainer}>
            <div>
                <TypeWriter />
            </div>
                <body>
                    <p>
                        <ul className={styles.facts}>
                            <li>&#127969; I grew up outside of Pittsburgh, PA</li>
                            <li>&#128106; I am one of 5 siblings</li>
                            <li>&#128008; & &#128034; I have a cat named Birdie and a pet tortoise named Monster Truck</li>
                            <li>&#129336; I am a part-time gymnastics teacher</li>
                            <li>&#128218; I love to read, check out the books I've been reading</li>
                            <li>&#129496; I want to get my Yoga Teacher Training certification</li>
                        </ul>
                    </p>
                </body>
                <aside>
                    <p>this is my slideshow</p>
                    <Slideshow />
                </aside>
                <footer>
                    <button className={styles.aboutButton} onClick={onAboutClick}>
                        Click to view my work!
                    </button>
                </footer> 
        </main>
    </body>
    );
};
