import React, { Component } from 'react';
import styles from "./Search.module.css"

class Search extends Component {
    render() {
        return (
            <div className={styles.container}>
                <p>Serach what you want</p>
                <input placeholder='Serach...' />   
            </div>
        );
    }
}
 
export default Search;