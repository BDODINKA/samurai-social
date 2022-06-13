import React from 'react';
import styles from "../../styleComponents/sidebar/sidebar.module.css"
import {SidebarContent} from "./SidebarContent";


export const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <SidebarContent/>
        </div>
    )


}