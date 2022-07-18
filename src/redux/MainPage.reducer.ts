import {v1} from "uuid";


type MainPostType = {
    id: string
    post: string
    date: any
}
export type MainPageType = {
    mainPost: Array<MainPostType>
    newText: string
}




let stateMainPage: MainPageType = {
    mainPost: [],
    newText: '',
};


export const MainPageReducer = (state = stateMainPage, action: AllTypes) => {
    switch (action.type) {
        case 'ADD-POST': {
            let newState = {
                ...state,
                mainPost: [{
                    id: v1(),
                    post: action.payload.newPost,
                    date: (new Date()).toLocaleString()
                }, ...state.mainPost]
            };
            newState.newText = ''
            return newState
        }
        case 'ADD-TEXT': {

            let newState = {...state, newText: action.payload.newText}
            return newState
        }
        default: {
            return stateMainPage
        }
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



