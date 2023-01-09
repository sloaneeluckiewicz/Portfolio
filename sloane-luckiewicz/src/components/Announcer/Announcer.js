import { useTypedMessage } from '../../Helpers/useTypedMessage';
import styles from './styles.module.css';

export const Announcer = ({ message }) => {
    const typedMessage = useTypedMessage(message);

    return <div className={styles.main}>
        <div className={styles.message}>{typedMessage}</div>
    </div>;
}