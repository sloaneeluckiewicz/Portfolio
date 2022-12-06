import React from 'react';
import styles from './styles.module.css';

class Hello extends React.Component {
    constructor() {
      super();
    }
  
    async componentDidMount() {
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
  
    render() {
        return (
            <div className={styles.main}>
                <p>Hello my name is Sloane Luckiewicz </p>
            </div>
        )
    }
  }

  export default Hello ;
  
