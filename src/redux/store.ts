import {legacy_createStore} from "redux";
import {counterReducer} from "../reducer/counter-reducer";
import {composeWithDevTools} from "redux-devtools-extension";


export const store = legacy_createStore(counterReducer, composeWithDevTools() )


export type AppStateType = ReturnType<typeof counterReducer>


// @ts-ignore
window.store = store