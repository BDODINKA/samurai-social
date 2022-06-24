import React from 'react';
import style from '../../styleComponents/events/events.module.css'
import EventPeople from "./EventPeople";
import EventPost from "./EventPost";
import {RootStateType} from "../../redux/state";




const Events = (props:RootStateType) => {
    return (
        <div className={style.Events}>
            <div className={style.Items}>
                <EventPeople eventPage={props.eventPage}/>
            </div>
            <div className={style.posts}>
                <EventPost eventPage={props.eventPage}/>
            </div>
        </div>
    )
};

export default Events;