import styles from "./styles.module.css";
import {React, useState, useEffect} from "react";

function Hello() {
    const first_text = "Hello!";
    const second_text = "My name is Sloane Luckiewicz";
    const third_text = "and this is my portfolio.";
  
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    const [text3, setText3] = useState("");

    useEffect(() => {
      const timeout = setTimeout(() => {
        setText1(first_text.slice(0, text1.length + 1));
      }, 200);
      return () => clearTimeout(timeout);
    }, [text1]);
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        setText2(second_text.slice(0, text2.length + 1));
      }, 100);
  
      return () => clearTimeout(timeout);
    }, [text2]);
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        setText3(third_text.slice(0, text3.length + 1));
      }, 100);
  
      return () => clearTimeout(timeout);
    }, [text3]);

  return (
    <div className={styles.main}>
        <span className={styles.message}>
          <div>{text1}</div>
          <div>{text2}</div>
          <div>{text3}</div>
        </span>
    </div>
  );
}

export default Hello;