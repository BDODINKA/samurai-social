import React from 'react';
import styles from "../../styleComponents/header/headerContent.module.css"
import {HeaderLogo} from "./HeaderLogo";
import {HeaderSearch} from "./HeaderSearch";
import {HeaderAva} from "./HeaderAva";
import {Headerbtn} from "./HeaderBtn";
import {HeaderTitle} from "./HeaderTitle";


export const HeaderContent = () => {
    return (
        <div className={styles.content}>
            <HeaderLogo/>
            <HeaderTitle/>
            <HeaderSearch/>
            <Headerbtn/>
            <HeaderAva/>
        </div>

    )
}