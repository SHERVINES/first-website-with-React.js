import React from 'react';
import styles from "./Banner.module.css"
import banner from "../images/banner.jpg"

const Banner = () => {
    return (
        <div className={styles.container}>
            <img src={banner} />
            <div className={styles.textContainer}>
                <h1>Cold Mountain</h1>
                <p>We are freezing <span>here</span></p>
            </div>
        </div>
);

};

export default Banner;