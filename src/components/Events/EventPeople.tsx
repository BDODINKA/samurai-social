import React from 'react';
import style from "../../styleComponents/events/events.module.css";
import {EventPageType} from "../../redux/state";

type eventPeopleType = {
    eventPeople:EventPageType
}



const EventPeople = (props: eventPeopleType) => {
    const people = props.eventPeople.PeopleMass.map(p =>
        <div
            className={style.Item}
            key={p.id}>
            {p.name}
        </div>
    )
    return (
        <div className={style.Item}>
            {people}
        </div>
    );
};


export default EventPeople;