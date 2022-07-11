import React from 'react'
import style from '../../styleComponents/main/main.post.module.css'
import {MainPageType} from "../../redux/state";

type Post = {
    post: MainPageType
}

export const MainPosts = (props: Post) => {
    return (
        <div className={style.mainPost}>
            {props.post.mainPost.map(p =>
                <div className={style.posts} key={p.id}>
                    <div className={style.post}>
                        <div className={style.logo}>{}</div>
                        <p className={style.title}>Name</p>
                        <div className={style.time}>{p.date}</div>
                        <button>...</button>
                    </div>
                    <div className={style.photo}>
                        <p className={style.description}>{p.post}</p>
                        <div className={style.content}>
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                            <div>4</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
};