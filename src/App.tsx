import React, {ChangeEvent, ChangeEventHandler, FormEvent, useState} from 'react';
import s from './App.module.css'
import {Button} from "./Components/Button";
import {Counter} from "./Components/Counter";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {counterReducer} from "./reducer/counter-reducer";



export type initialStateType = {
    counter: number,
    maxValue: number
    startValue: number
    settings: boolean
    error: boolean
}


export const useTypedSelector: TypedUseSelectorHook<counterReducer> = useSelector


export const App = () => {
    // const [value, setValue] = useState<initialStateType>(initialState)
    const value  = useSelector<initialStateType>(state => state)

    // const {counter, maxValue, startValue, settings, error} = value

    const incrementCounter = () => {
        if(counter <= maxValue ) {
            setValue({...value, counter:  value.counter +1})
        }
    }

    const resetCounter = () => {
        setValue({...value, counter: startValue, settings: true})
    }

    const handleOnChangeInputMax = (e: ChangeEvent<HTMLInputElement>) => {
        setValue({...value, maxValue: Number(e.currentTarget.value)})
    }

    const handleOnChangeInputStart = (e: ChangeEvent<HTMLInputElement>) => {
        setValue({...value, startValue: Number(e.currentTarget.value)})

    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setValue({...value, counter: startValue, settings: false})

    }



    return (
        <div className={s.app}>
            <div className={s.num}>
                <Counter
                    counter={counter}
                    settings={settings}
                    maxValue={maxValue}
                    startValue={startValue}
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

