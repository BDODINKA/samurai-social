import React from 'react';
import style from "../../styleComponents/events/events.module.css";
import {RootStateType} from "../../redux/state";


const EventPost = (props: RootStateType) => {
    const post = props.eventPage.PeopleData.map(p => <div className={style.post} key={p.id}>{p.post}</div>)

    return (
        <div className={style.items}>
            {post}
        </div>

    )


};

export default EventPost;