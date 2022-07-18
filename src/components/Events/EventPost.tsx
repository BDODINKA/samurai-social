import React, {ChangeEvent} from 'react';
import style from "../../styleComponents/events/events.module.css";
import {EventPageType} from "../../redux/EventPage.reducer";


type propsType= {
    addPost:(newPost:string)=>void
    addInputText:(newMessage:string)=>void
    EventPeople:EventPageType
}


const EventPost = (props:propsType) => {
    const post = props.EventPeople.PeopleData.map(p => {
        return <>
            <div className={style.post} key={p.id}>{p.message}</div>
            <div className={style.posts} key={p.id}>{p.name}</div>
        </>}

    )
    const addHandler = () => {
      props.addPost(props.EventPeople.newText)
    }
    const onChangeHandler=(e:ChangeEvent<HTMLTextAreaElement>)=> {
        props.addInputText(e.currentTarget.value)

    }

    return (
        <div className={style.items}>
            {post}
            <div>
                <textarea onChange ={onChangeHandler} value={props.EventPeople.newText}>{}</textarea>
                <button onClick={addHandler}>add</button>
            </div>
        </div>

    )


};

export default EventPost;