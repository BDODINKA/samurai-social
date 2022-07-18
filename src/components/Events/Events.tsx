import {connect} from "react-redux";
import {AddNewInputTextAC, AddPostAC} from "../../redux/EventPage.reducer";
import EventPost from "./EventPost";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type mapAllType ={
    addPost:(newPost:string)=>void
    addInputText:(newMessage:string)=>void
}



const mapToProps = (state:AppStateType) => {
  return{
      EventPeople:state.EventPageReducer
  }
}


const mapToDispatchToProps = (dispatch:Dispatch):mapAllType => {
    return{
        addPost:(newPost:string)=>{
            dispatch(AddPostAC(newPost))
        },
        addInputText:(newMessage:string)=>{
            dispatch(AddNewInputTextAC(newMessage))
        }
    }
}






export const Events = connect(mapToProps,mapToDispatchToProps)(EventPost)