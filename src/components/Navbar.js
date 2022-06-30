import React from 'react';
import styles from "./Navbar.module.css"
import logo from "../images/logovi.jpg"

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.listContainer}>
                <ul className={styles.list}>
                    <li>Home page</li>
                    <li>Products</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className={styles.logo}>
                <img src={logo} alt="logo-pic" />
            </div>
        </header>
    );
};

export default Navbar;