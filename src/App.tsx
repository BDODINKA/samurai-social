import React from 'react';
import './App.css';

import {Sidebar} from "./components/Sidebar/Sidebar";
import {Main} from "./components/Main/Main";
import {Header} from "./components/Header/Header";


function App() {
    return (
        <>
            <Header/>
            <Sidebar/>
            <Main/>
        </>
    )
}

export default App;
