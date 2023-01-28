import styles from './styles.module.css';
import grad1 from '../../images/grad1.JPG'
import grad3 from '../../images/grad3.JPG'
import grad6 from '../../images/grad6.JPG'
import grad7 from '../../images/grad7.JPG'

export const StartMenu = ({ onStartClick }) => {
    return (
    <content className={styles.flexContainer}>
        <main>
            <div>
                <img src={grad3} alt="Me in gown in front of pink flowers." className={styles.images}/>
                <img src={grad6} alt="Me in front of WillyB." className={styles.images}/>
                <img src={grad7} alt="Me in jersey in front of fountain." className={styles.images}/>
                <img src={grad1} alt="Me in front of Swearingen." className={styles.images}/>
            </div>
            <div className={styles.content}>
                <header>
                    <h2>Hello, my name is...</h2>
                    <h1>Sloane Luckiewicz</h1>
                </header>
                <body>
                    <p className={styles.paragraph}>
                        I recently graduated from the University of South Carolina in December of 2022. I obtained a <span style={{ fontWeight: 'bold' }} >B.S. in Integrated Information Technology </span> 
                        with a leadership distinction in <span style={{ fontWeight: 'bold' }}> Professional and Civic Engagement</span>. I love to work with front-end programming languages like 
                        <span style={{fontWeight: 'bold' }}> HTML, CSS, JavaScript, React JS</span>. I am extremely passionate about all things technology and aspire to be a front-end web developer while
                        incorporating the best security practices and protocols. Right now my tech obsession is learning about <span style={{fontWeight: 'bold' }}>white hat hackers</span>.
                    </p>
                    <div>
                        <p className={styles.links}>
                            Check me out:
                            <ul>
                                <li><a href="https://drive.google.com/file/d/1Q1ochgQYGj9lDQb7rcfOiw1tiyYQ006t/view?usp=sharing">Resume</a></li>
                                <li><a href="https://www.linkedin.com/in/sloane-luckiewicz/">LinkedIn</a></li>
                                <li><a href="https://github.com/sloaneeluckiewicz">GitHub</a></li>
                                <li><a href="https://sloaneluckiewicz.wixsite.com/sloaneeluckiewicz">Graduation with Leadership Distinction (GLD)</a></li>
                                <li><a href="https://www.credly.com/users/sloane-luckiewicz.8985866f/badges">Certifications</a></li>
                            </ul>
                        </p>
                        <button className={styles.startButton} onClick={onStartClick}>
                            Click to read about me!
                        </button>
                    </div> 
                </body>  
            </div>
        </main>
        <footer>
            contact me
        </footer> 
    </content>
    );
};

