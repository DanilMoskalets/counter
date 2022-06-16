import React, {ChangeEvent, ChangeEventHandler, FormEvent, useState} from 'react';
import s from './App.module.css'
import {Button} from "./Components/Button";
import {Counter} from "./Components/Counter";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {
    counterReducer,
    handleOnChangeInputMaxAC,
    handleSubmitAC,
    OnChangeInputStartAC
} from "./reducer/counter-reducer";
import {AppStateType} from "./redux/store";



export type initialStateType = {
    counter: number
    maxValue: number,
    startValue: number
}


export const App = () => {
    const dispatch = useDispatch()
    const {counter, maxValue, startValue}  = useSelector<AppStateType, initialStateType>(state => state)


    // const {counter, maxValue, startValue, settings, error} = value


    const handleOnChangeInputMax = (e: ChangeEvent<HTMLInputElement>) => {
       if(Math.sign(maxValue)) {
           console.log(maxValue)
           dispatch(handleOnChangeInputMaxAC(Number(e.currentTarget.value)))
       }
       // setMaxValue(e.currentTarget.value)
    }

    const handleOnChangeInputStart = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(OnChangeInputStartAC(Number(e.currentTarget.value)))
        //setValue({...value, startValue: Number(e.currentTarget.value)})

    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
       // setValue({...value, counter: startValue, settings: false})
        dispatch(handleSubmitAC())
    }



    return (
        <div className={s.app}>
            <div className={s.num}>
                <Counter

                />
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input className={maxValue === startValue || maxValue < 0 ? s.inputError : ''} type='number' value={ maxValue}   onChange={ handleOnChangeInputMax}/>
                    <input  className={startValue >= maxValue || startValue < 0 ? s.inputError : ''} type='number'  value={ startValue} onChange={handleOnChangeInputStart}/>
                    <Button type={'submit'} >Set</Button>
                </form>
            </div>
        </div>
    );
}

