/*
thoughts: use this as the component with message as state
use introduction as component to change the state
*/
import { Hello } from './Hello';

export const UseHello = ({ message }) => {
    const typedMessage = Hello(message);
    
    return (
        <div>
            <div>{typedMessage}</div>
        </div>
    )
}

