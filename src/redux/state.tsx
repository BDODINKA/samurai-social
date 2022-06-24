import {v1} from "uuid";

type PeopleType = {
    id:string
    name:string
    post:string
}
type PeopleMassType = {
    id:string
    name:string
    post:string
}

type EventPageType = {
    PeopleData:Array<PeopleType>
    PeopleMass:Array<PeopleMassType>
}

export type RootStateType = {
    eventPage:EventPageType
}


 export let State = {
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
    }


}