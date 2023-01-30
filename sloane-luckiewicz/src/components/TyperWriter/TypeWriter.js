//import styles from './styles.module.css';
import { useState } from 'react';
import { Announcer } from '../Announcer/Announcer';

export const TypeWriter = () => {
    const [announcerMessage, setAnnouncerMessage] = useState(''); 
    return (
        <div>
            <Announcer
                message = {
                   announcerMessage || 'Fun facts about me :)'
                }
            />
        </div>   
    )
} 
