import {createStore} from "redux";
import {counterReducer} from "../reducer/counter-reducer";

export const store = createStore(counterReducer)


// @ts-ignore
window.store = store