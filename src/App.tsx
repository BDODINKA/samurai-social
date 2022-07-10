import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Main} from "./components/Main/Main";
import {Header} from "./components/Header/Header";
import {addNewInputText, addPost, RootStateType} from "./redux/state";


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
                    AllPage={props.appState}
                    addPost={addPost}
                    addNewInputText={addNewInputText}
                />
            </BrowserRouter>
        </>
    )
}

export default App;
