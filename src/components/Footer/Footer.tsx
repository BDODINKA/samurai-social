import React from 'react';
import {Wrapper} from "../Wrapper/Wrapper";
import styles from "../../styleComponents/footer/footer.module.css"


export const Footer = (props: any) => {
    if (props.value === 'footer') {
        return (
            <div className={styles.footer}>
                <Wrapper value={1}/>
            </div>
        );
    }
    return (
        <div className={styles.footer}>
            ERROR
        </div>
    );

}