import styles from './styles.module.css';
import { useState, useEffect } from 'react';
import { Announcer } from '../Announcer/Announcer';

export const Introduction = () => {
    // removed announcer state and moved it to useIntroduction
    const [announcerMessage, setAnnouncerMessage] = useState(''); 
    return (
        <div className={styles.main}>
            <Announcer
                message = {
                   announcerMessage || 'Hello, my name is Sloane Luckiewicz!'
                }
            />
        </div>   
    )
} 
