import React from 'react';
import style from "../../styleComponents/events/events.module.css";
import {EventPageType} from "../../redux/state";

type eventPostType={
    eventPost:EventPageType
}
const EventPost = (props: eventPostType) => {
    const post = props.eventPost.PeopleData.map(p => <div className={style.post} key={p.id}>{p.post}</div>)

    return (
        <div className={style.items}>
            {post}
        </div>

    )


};

export default EventPost;