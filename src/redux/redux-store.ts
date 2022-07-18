import {combineReducers, legacy_createStore as createStore} from "redux";
import {MainPageReducer} from "./MainPage.reducer";
import EventPageReducer from "./EventPage.reducer";

let rootReducer = combineReducers(
    {
        MainPageReducer,
        EventPageReducer,
    }
)

let store = createStore(rootReducer);

export type AppStateType = ReturnType<typeof rootReducer>

export default store
