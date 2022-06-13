import React from 'react';
import style from '../../styleComponents/main/main.story.module.css'

export const MainStory = () => {
    return (
        <div className={style.story}>
            <button>+</button>
            <div className={style.photo}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </div>
        </div>

    )
}