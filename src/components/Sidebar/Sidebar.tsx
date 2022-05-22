import React from 'react';

import {Wrapper} from "../Wrapper/Wrapper";
import styles from "../../styleComponents/sidebar/sidebar.module.css"


export const Sidebar = (props:any) => {
    if(props.value === 'sidebar'){
        return (
            <div className={styles.sidebar}>
                <Wrapper value = {2}/>
            </div>
        );
    }
    return (
        <div className='sidebar'>
            ERROR
        </div>
    );
}