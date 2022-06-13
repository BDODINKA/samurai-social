import React from 'react';
import style from "../../styleComponents/main/main.yourpost.module.css"


export const MainYourPost = () => {
    return (
        <div className={style.your_posts}>
            <div className={style.post}>
                <div className ={style.logo}>{}</div>
                <textarea className ={style.description} >{}</textarea>
                <button className ={style.btn}>add</button>
            </div>
            <div className={style.buttons}>
                <button>Video</button>
                <button>Photo</button>
            </div>
        </div>
    )
}