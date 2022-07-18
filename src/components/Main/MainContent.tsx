import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {AddNewInputTextAC, AddPostAC, MainPageType} from "../../redux/MainPage.reducer";
import {MainYourPost} from "./MainYourPost";
import {MainPosts} from "./MainPosts";
import {MainStory} from "./MainStory";
import {Dispatch} from "redux";

type MainContentType = {
    MainPage: MainPageType
}

type mapDispatchType = {
    addPost: (post: string) => void
    addNewInputText: (newPost: string) => void
}

const mapStoreToProps = (state: AppStateType): MainContentType => {
    return {
        MainPage: state.MainPageReducer
    }
}
const mapToDispatchToProps = (dispatch: Dispatch): mapDispatchType => {
    return {
        addPost: (post: string) => {
            dispatch(AddPostAC(post))
        },
        addNewInputText: (newPost: string) => {
            dispatch(AddNewInputTextAC(newPost))
        }
    }
}


export const MainContent = connect(mapStoreToProps, mapToDispatchToProps)(MainYourPost);
export const MainPost = connect(mapStoreToProps)(MainPosts);
export const MainStories = connect(mapStoreToProps)(MainStory);