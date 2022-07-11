import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Main} from "./components/Main/Main";
import {Header} from "./components/Header/Header";
import {RootStateType, store} from "./redux/state";



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
                        addPost={store.addPost.bind(store)}
                        addNewInputText={store.addNewInputText.bind(store)}
                    />

            </BrowserRouter>
        </>
    )
}

export default App;
