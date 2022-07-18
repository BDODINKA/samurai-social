import React from 'react';
import {MainContent, MainPost, MainStories} from "./MainContent";

const MainWrapper = () => {
    return (
        <>
            <MainStories/>
            <MainContent/>
            <MainPost/>
        </>

    );
};

export default MainWrapper;