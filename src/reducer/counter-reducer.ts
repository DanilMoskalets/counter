import {initialStateType} from "../Components/App/App";
import {ChangeEvent} from "react";


export type incrementCounterAT = {
    type: 'INCREMENT-COUNTER'
}
export type resetCounterAT = {
    type: 'RESET-COUNTER'
}
export type handleOnChangeInputMaxAT = {
    type: 'ONCHANGE-INPUT-MAX'
    event: number
}
export type OnChangeInputStartAT = {
    type: 'ONCHANGE-INPUT-START'
    event: number
}

export type handleSubmitAT = {
    type: 'HANDLE-SUBMIT'
}

export type resetCounter = {
    type: 'RESET-COUNTER'
}
export type settingsStartAT = {
    type: 'SETTINGS-START'
}

const initialState = {
    counter: 0,
    maxValue: 0,
    startValue: 0,
    settings: false
}



export type ActionType = incrementCounterAT | resetCounter | handleOnChangeInputMaxAT | OnChangeInputStartAT | handleSubmitAT | settingsStartAT

export const counterReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "INCREMENT-COUNTER":
            if (state.counter <= state.maxValue) {
                return {...state, counter: state.counter + 1}
            } else return state
        case "RESET-COUNTER":
            return {...state, counter: state.startValue}
        case "ONCHANGE-INPUT-MAX":
                return {...state, maxValue: action.event}
        case "ONCHANGE-INPUT-START":
            return {...state, startValue: action.event}
        case "SETTINGS-START":
            return {...state, settings: true}
        case "HANDLE-SUBMIT":
            return {...state, counter: state.startValue, settings: false}
        default:
            return state
    }
}

export const incrementCounterAC = (): ActionType => {
    return {type: 'INCREMENT-COUNTER'}
}

export const settingsStartAC = (): ActionType => {
    return {type: 'SETTINGS-START'}
}

export const handleSubmitAC = (): ActionType => {
    return {type: 'HANDLE-SUBMIT'}
}

export const resetCounterAC = (): ActionType => {
    return {type: 'RESET-COUNTER'}
}

export const handleOnChangeInputMaxAC = (event: number): ActionType => {
    return{type: 'ONCHANGE-INPUT-MAX', event }
}

export  const OnChangeInputStartAC = (event: number) => {
  return{type:'ONCHANGE-INPUT-START', event }
}