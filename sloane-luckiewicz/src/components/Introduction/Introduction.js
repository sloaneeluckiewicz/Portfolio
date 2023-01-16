//import styles from './styles.module.css';
import { useState } from 'react';
import { Announcer } from '../Announcer/Announcer';

export const Introduction = () => {
    const [announcerMessage, setAnnouncerMessage] = useState(''); 
    return (
        <div>
            <Announcer
                message = {
                   announcerMessage || 'Hello! My name is Sloane Luckiewicz!'
                }
            />
        </div>   
    )
} 
