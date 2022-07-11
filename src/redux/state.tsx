import {v1} from "uuid";


export type storeType = {
    _State:RootStateType
    addPost:(post:any)=>void
    addNewInputText:(newText:string)=>void
    subscribe:(observer:()=>void)=>void
    getState:()=>RootStateType
    _RenderTree:() => void;
}
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

export let store:storeType ={
    _State: {
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

    },
    getState(){
        return this._State
    },
    _RenderTree(){

    },
    addPost (post:any){
        this._State.mainPage.mainPost.push(
            {id:v1(), post:this._State.mainPage.newText, date:(new Date()).toLocaleString()}
        )
        this._State.mainPage.newText=''
        this._RenderTree()
    },
    addNewInputText(newText:string){
        this._State.mainPage.newText = newText
        this._RenderTree()
    },
    subscribe(observer:()=>void){
        this._RenderTree = observer
    }

}














