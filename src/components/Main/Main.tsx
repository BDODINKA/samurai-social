import React from 'react';
import styles from "../../styleComponents/main/main.module.css"
import MarketPlace from "../MarketPlace/MarketPlace";
import Files from "../Files/Files";
import Friends from "../Friends/Friends";
import {Route} from "react-router-dom";
import MainWrapper from "./MainWrapper";
import {Events} from "../Events/Events";


export const Main = () => {
    return (

        <div className={styles.main}>
            <Route path='/Main' render={() => (<MainWrapper/>)}/>
            <Route path='/Events' render={() => (<Events/>)}/>
            <Route path='/MarketPlace' component={MarketPlace}/>
            <Route path='/Files' component={Files}/>
            <Route path='/Friends' component={Friends}/>

        </div>


    );

}