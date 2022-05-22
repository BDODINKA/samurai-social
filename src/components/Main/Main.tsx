import React from 'react';
import {Wrapper} from "../Wrapper/Wrapper";
import styles from "../../styleComponents/main/main.module.css"


export const Main = (props: any) => {
    if (props.value === 'main') {
        return (
            <div className={styles.main}>
                <Wrapper value={3}/>
            </div>
        );
    }
    return (
        <div className={styles.main}>
            ERROR
        </div>
    );
}