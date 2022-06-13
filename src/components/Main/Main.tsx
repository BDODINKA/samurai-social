import React from 'react';
import styles from "../../styleComponents/main/main.module.css"
import {MainContent} from "./MainContent";


export const Main = () => {

        return (
            <div className={styles.main}>
                <MainContent/>
            </div>
        );

}