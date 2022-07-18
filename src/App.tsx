import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Main} from "./components/Main/Main";
import {Header} from "./components/Header/Header";



function App() {
    return (
        <>
            <BrowserRouter>
                    <Header/>
                    <Sidebar/>
                    <Main/>

            </BrowserRouter>
        </>
    )
}

export default App;
