/*
import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { UseHello } from './useHello';
import { wait } from '../../Helpers/wait';

export const Introduction = (message) => {
    const [myMessage, setMyMessage] = useState('');

    useEffect(()=> {
        const message = UseHello(message)
        (async () => {
            setMyMessage(`Hello, my name is Sloane Luckiewicz.`);
            await wait(1000);

            setMyMessage(`Welcome to my portfolio.`);
            await wait(1000);
        })
    }, [message])

    return {
        myMessage
    };

}
*/

//import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { UseHello } from './useHello';

export const Introduction = () => { 
    return (
        <div className={styles.main}>
            <UseHello
                message = {'Hello, my name is Sloane Luckiewicz!'}
            />
        </div>   
    )
} 

/*

import { useEffect, useState } from 'react';
import styles from './styles.module.css';
//import { UseHello } from './useHello';
import { wait } from '../../Helpers/wait';

export const Introduction = () => {
    const [myMessage, setMyMessage] = useState('');

     useEffect(() => {
        setMyMessage('');
        (async () => {
            setMyMessage('Hello, my name is Sloane Luckiewicz!')
            await wait(1000);
            setMyMessage('Welcome to my portfolio.')
        })
     }, [myMessage])
    return (
       myMessage  
    )
} 
*/