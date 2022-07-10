import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RootStateType, State} from "./redux/state";



export const RenderTree = (State:RootStateType)=>{
    ReactDOM.render(
        <App appState={State}/>,
        document.getElementById('root')
    );
}
RenderTree(State);
