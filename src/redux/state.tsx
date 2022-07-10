import {v1} from "uuid";
import {RenderTree} from "../index";

export type PeopleType = {
    id:string
    name:string
    post:string
}
export type PeopleMassType = {
    id:string
    name:string
    post:string
}
export type MainPostType={
    id:string
    post:string
    date: any
}

export type EventPageType = {
    PeopleData:Array<PeopleType>
    PeopleMass:Array<PeopleMassType>
}

export type MainPageType = {
    mainPost:Array<MainPostType>
    newText:string
}

export type RootStateType = {
    eventPage:EventPageType
    mainPage:MainPageType
}


 export let State :RootStateType = {
    eventPage:{
        PeopleData :[
            {id: v1(), name: "Nadzeya",post:'Hi'},
            {id: v1(), name: "Vasia",post:'What is Happen?'},
            {id: v1(), name: "Kolya",post:'how are you?'},
            {id: v1(), name: "Rusel",post:'My dear Friend'},
            {id: v1(), name: "Dima",post:'I am Lazy'}
        ],
        PeopleMass :[
            {id: v1(), name: "BROTHER",post:'What is Happen?'},
            {id: v1(), name: "FFFFF",post:'Fuck you?'},
        ]
    },
     mainPage:{
        mainPost:[

        ],
         newText:''
     }



}


export const addPost = (post:any)=>{
    State.mainPage.mainPost.push(
        {id:v1(), post:State.mainPage.newText, date:(new Date()).toLocaleString()}
    )
    State.mainPage.newText=''
    RenderTree(State)
}
export const addNewInputText = (newText:string)=>{
    State.mainPage.newText=newText
    RenderTree(State)
}