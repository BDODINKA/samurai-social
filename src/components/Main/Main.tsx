import React from 'react';
import styles from "../../styleComponents/main/main.module.css"
import {MainContent} from "./MainContent";
import Events from "../Events/Events";
import MarketPlace from "../MarketPlace/MarketPlace";
import Files from "../Files/Files";
import Friends from "../Friends/Friends";
import {Route} from "react-router-dom";
import {RootStateType} from "../../redux/state";


type allTypes = {
    AllPage:RootStateType
    addPost:(post:string)=>void
    addNewInputText:(newText:string)=>void
}

export const Main = (props:allTypes) => {
        return (

                    <div className={styles.main}>
                            <Route path='/Main' render={()=>(
                                <MainContent
                                    mainPage={props.AllPage.mainPage}
                                    addPost={props.addPost}
                                    addNewInputText={props.addNewInputText}
                                />)
                            }/>
                            <Route path='/Events' render={()=>(<Events eventPage={props.AllPage.eventPage}/>)}/>
                            <Route path='/MarketPlace' component={MarketPlace}/>
                            <Route path='/Files' component={Files}/>
                            <Route path='/Friends' component={Friends}/>
                    </div>


        );

}