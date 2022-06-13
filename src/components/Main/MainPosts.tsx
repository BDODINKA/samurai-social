import React from 'react'
import style from  '../../styleComponents/main/main.post.module.css'


export const MainPosts = () => {
    return (
        <div className={style.posts}>
            <div className={style.post}>
                <div className ={style.logo}>{}</div>
                <p className ={style.title}>Alexa</p>
                <p className = {style.time}>1 hour ago</p>
                <button>...</button>
            </div>
            <div className={style.photo}>
                <p className={style.description}>Description</p>
                <div className ={style.content}>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </div>
            </div>
        </div>

    )
}