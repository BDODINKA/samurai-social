import React from 'react';
import styles from "../../styleComponents/header/header.module.css"
import {HeaderContent} from "./HeaderContent";

export const Header = () => {

        return (
            <div className={styles.header}>
                <HeaderContent/>
            </div>)


}