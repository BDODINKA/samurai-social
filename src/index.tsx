import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./redux/state";




export const RenderTree = ()=>{
    ReactDOM.render(
        <App appState={store.getState()}/>,
        document.getElementById('root')
    );
}
RenderTree();

store.subscribe(RenderTree)