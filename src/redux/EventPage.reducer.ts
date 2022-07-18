import {v1} from "uuid";


type PeopleType = {
    id: string
    name: string
    message: string
}

export type EventPageType = {
    PeopleData: Array<PeopleType>
    newText: string
}



let eventPage: EventPageType = {
    PeopleData: [
        {id: v1(), name: "Nadzeya", message: 'Hi'},
        {id: v1(), name: "Vasia", message: 'What is Happen?'},
        {id: v1(), name: "Kolya", message: 'how are you?'},
        {id: v1(), name: "Rusel", message: 'My dear Friend'},
        {id: v1(), name: "Dima", message: 'I am Lazy'}
    ],
    newText:'',
};

const EventPageReducer = (state = eventPage, action: AllTypes) => {
    switch (action.type) {
        case "ADD-POST": {
            let newState = {
                ...state, PeopleData:
                    [...state.PeopleData,
                        {id: v1(), name: "Katya", message: action.payload.newPost}
                    ]
            }
            newState.newText = ''
            return newState
        }
        case "ADD-TEXT":{
            return {...state,newText:action.payload.newText}
        }
        default:return state
    }
};


type AllTypes = ReturnType<typeof AddPostAC> | ReturnType<typeof AddNewInputTextAC>;

export const AddPostAC = (post: string) => {
    return {
        type: 'ADD-POST',
        payload: {newPost: post}
    } as const
};
export const AddNewInputTextAC = (newText: string) => {

    return {
        type: 'ADD-TEXT',
        payload: {newText: newText}
    } as const
};


export default EventPageReducer;