import React from 'react';
import {MainStory} from "./MainStory";
import {MainYourPost} from "./MainYourPost";
import {MainPosts} from "./MainPosts";


export const MainContent = () => {
    return (
        <div className="content">
            <MainStory/>
            <MainYourPost/>
            <MainPosts/>
        </div>

    )
}