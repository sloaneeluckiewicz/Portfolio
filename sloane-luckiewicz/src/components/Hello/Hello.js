import {useState, useEffect} from "react";
import { wait } from "../../Helpers/wait";

export const Hello = (message) => {
    const[typedMessage, setTypedMessage]= useState(' ');

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

    return typedMessage;
  
}
