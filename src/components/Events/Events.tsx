import React from 'react';
import style from '../../styleComponents/events/events.module.css'
import EventPeople from "./EventPeople";
import EventPost from "./EventPost";
import {EventPageType} from "../../redux/state";

type EventsType ={
    eventPage:EventPageType
}


const Events = (props:EventsType) => {
    return (
        <div className={style.Events}>
            <div className={style.Items}>
                <EventPeople eventPeople={props.eventPage}/>
            </div>
            <div className={style.posts}>
                <EventPost eventPost={props.eventPage}/>
            </div>
        </div>
    )
};

export default Events;