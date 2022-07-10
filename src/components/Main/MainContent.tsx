import React from 'react';
import {MainStory} from "./MainStory";
import {MainYourPost} from "./MainYourPost";
import {MainPosts} from "./MainPosts";
import {MainPageType} from "../../redux/state";

type MainContentType= {
    mainPage:MainPageType
    addPost:(post:string)=>void
    addNewInputText:(newText:string)=>void
}

export const MainContent = (props:MainContentType) => {
    return (
        <div className="content">
            <MainStory/>
            <MainYourPost
                addPost = {props.addPost}
                addNewInputText={props.addNewInputText}
                mainPage={props.mainPage.newText}
            />
            <MainPosts post={props.mainPage} />
        </div>

    )
}