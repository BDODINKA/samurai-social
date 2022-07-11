import React, {ChangeEvent} from 'react';
import style from "../../styleComponents/main/main.yourpost.module.css"
import {store} from "../../redux/state";

type MainYourPostType = {
    addPost:(post:string)=>void
    addNewInputText:(newText:string)=>void
    mainPage:string
}


export const MainYourPost = (props:MainYourPostType) => {

    let newPost = React.createRef<HTMLTextAreaElement>()

    const onClickAddPostHandler = () => {
        let text = newPost.current?.value;
        store.addPost(text);
    }

    const onChangeTextArea = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.addNewInputText(e.currentTarget.value)
    }

    return (
        <div className={style.your_posts}>
            <div className={style.post}>
                <div className ={style.logo}>{}</div>
                <textarea className ={style.description} ref={newPost} onChange={onChangeTextArea} value={props.mainPage}>{}</textarea>
                <button className ={style.btn} onClick={onClickAddPostHandler}>add</button>
            </div>
            <div className={style.buttons}>
                <button>Video</button>
                <button>Photo</button>
            </div>
        </div>
    )
}