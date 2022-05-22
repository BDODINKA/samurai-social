import React from 'react';
import {HeaderContent} from "../Header/HeaderContent";
import {MainContent} from "../Main/MainContent";
import {SidebarContent} from "../Sidebar/SidebarContent";
import styles from "../../styleComponents/wrapper/wrapper.module.css"

export const Wrapper = (props: any) => {
    if (props.value === 1) {
        return (
            <div className={styles.wrapper}>
                <HeaderContent/>
            </div>
        )
    }
    if (props.value === 2) {
        return (
            <div className={styles.wrapper}>
                <SidebarContent/>
            </div>
        )

    }
    if (props.value === 3) {
        return (
            <div className={styles.wrapper}>
                <MainContent/>
            </div>
        )

    }
    return (
        <div className={styles.wrapper}>
            ERROR
        </div>
    )


    // )
}


