import { Hello } from './Hello';

export const UseHello = ({ message }) => {
    const typedMessage = Hello(message);
    
    return (
        <div>
            <div>{typedMessage}</div>
        </div>
    )
}

