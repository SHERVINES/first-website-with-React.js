import React from 'react';
import styles from "./Logos.module.css"
import apple from '../images/apple.jpg'
import samsung from '../images/samsung.jpg'
import xiaomi from '../images/xiaomi.png'

const Logos = () => {
    return (
        <div className={styles.container}>
            <h3>Who support us?</h3>
            <div className={styles.logo}>
            <img src={apple} />
            <img src={samsung} />
            <img src={xiaomi} />
            </div>
        </div>
    );
};


export default Logos;