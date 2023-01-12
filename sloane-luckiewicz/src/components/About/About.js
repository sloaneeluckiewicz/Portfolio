import styles from './styles.module.css';

export const About = () => {
    return (
    <div className={styles.main}>
         <h2>Professional Information:</h2>
         <ul>
            <li>B.S. in Integrated Information Technology from the University of South Carolina</li>
            <li>Leadership Distinction in Professional and Civic Engagement</li>
         </ul>
         <h2>Technical Skills</h2>
         <ul>
            <li>JavaScript</li>
            <li>React JS</li>
            <li>D3.js</li>
            <li>HTML5</li>
            <li>CSS</li>
            <li>SQL</li>
         </ul>
    </div>
    );
};