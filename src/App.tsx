import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Main} from "./components/Main/Main";
import {Header} from "./components/Header/Header";
import {RootStateType} from "./redux/state";


type State ={
    appState:RootStateType
}

function App(props:State) {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Sidebar/>
                <Main
                    eventPage={props.appState.eventPage}
                />
            </BrowserRouter>
        </>
    )
}

export default App;
