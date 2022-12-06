import styles from "./styles.module.css";
import {React, useState, useEffect} from "react";

export const Hello = () => {
    const[typedMessage, setTypedMessage]= useState(' ');
    const message = 'Hello my name is Sloane';

    const wait = ms => 
        new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, ms);
        });

        useEffect(() => {
            setTypedMessage('');
    
            if (message.length) {
                (async () => {
                    let visibleMessage = '';
    
                    for (let i = 0; i < message.length; i++){
                        await wait(75);
                        visibleMessage = visibleMessage + message[i];
                        setTypedMessage(visibleMessage)
                    }
                })();
            }
    
        }, [message]);

  return (
    <div className={styles.main}>
        <span className={styles.message}>
          <div>{typedMessage}</div>
        </span>
    </div>
  );
}
