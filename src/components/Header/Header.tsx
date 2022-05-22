import React from 'react';
import {Wrapper} from "../Wrapper/Wrapper";
import styles from "../../styleComponents/header/header.module.css"

export const Header = (props: any) => {
    if (props.value === 'header') {
        return (
            <div className={styles.header}>
                <Wrapper value={1}/>
            </div>
        );
    }
    return (
        <div className={styles.header}>
            ERROR
        </div>
    );

}