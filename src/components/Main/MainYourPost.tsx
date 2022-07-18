import React, {ChangeEvent} from 'react';
import style from "../../styleComponents/main/main.yourpost.module.css"
import {MainPageType} from "../../redux/MainPage.reducer";


type MainYourPostType = {
    addPost: (post: string) => void
    addNewInputText: (newPost: string) => void
    MainPage: MainPageType
}


export const MainYourPost = (props: MainYourPostType) => {
    console.log(props.MainPage.newText)
    const onClickAddPostHandler = () => {
        props.addPost(props.MainPage.newText)
    }

    const onChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.addNewInputText(e.currentTarget.value)

    }

    return (
        <div className={style.your_posts}>
            <div className={style.post}>
                <div className={style.logo}>{}</div>
                <textarea className={style.description} value={props.MainPage.newText}
                          onChange={onChangeTextArea}>{}</textarea>
                <button className={style.btn} onClick={onClickAddPostHandler}>add</button>
            </div>
            <div className={style.buttons}>
                <button>Video</button>
                <button>Photo</button>
            </div>
        </div>
    )

}