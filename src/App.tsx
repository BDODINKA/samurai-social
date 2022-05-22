import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Sidebar} from "./components/Sidebar/Sidebar";

function App() {
    return (
        <>
            <Header value = 'header'/>
            <Sidebar value = 'sidebar'/>
            <Main value = 'main'/>

        </>

    )
}

export default App;
