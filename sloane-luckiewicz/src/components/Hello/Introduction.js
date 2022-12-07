/*
import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { UseHello } from './useHello';
import { wait } from '../../Helpers/wait';

export const Introduction = () => {
    const [myMessage, setMyMessage] = useState('');

    useEffect(()=> {
        (async () => {
            setMyMessage(`Hello, my name is Sloane Luckiewicz.`);
            await wait(1000);
        })
    })

    return {
        myMessage
    };

}
*/


//import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { UseHello } from './useHello';
//import { wait } from '../../Helpers/wait';

export const Introduction = () => {
    return (
        <div className={styles.main}>
            <UseHello
                message = {`Hello, my name is Sloane Luckiewicz!`}
            /> 
            <UseHello
                message = {`Welcome to my portfolio`}
            /> 
        </div>   
    )
}
    