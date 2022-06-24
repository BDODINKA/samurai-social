import React from 'react';
import style from "../../styleComponents/events/events.module.css";
import {RootStateType} from "../../redux/state";


const EventPeople = (props: RootStateType) => {
    const people = props.eventPage.PeopleData.map(p =>
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