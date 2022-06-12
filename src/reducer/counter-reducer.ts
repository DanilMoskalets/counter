import {initialStateType} from "../App";



export type incrementCounterAT = {
    type: 'INCREMENT-COUNTER'
    counter: number
}

const initialState = {
    counter: 0,
    maxValue: 1,
    startValue: 0,
    settings: true,
    error: false
}


export type resetCounter = {
    type: 'RESET-COUNTER'
}

export type ActionType = incrementCounterAT | resetCounter

export const counterReducer = (state = initialState, action: ActionType) => {

}

// export const incrementCounterAC = (): ActionType => {
//   return {type: 'INCREMENT-COUNTER',}
// }
