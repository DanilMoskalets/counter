import React, {ChangeEvent, ChangeEventHandler, FormEvent, useState} from 'react';
import s from './App.module.css'
import {Button} from "./Components/Button";



type initialStateType = {
    counter: number,
    maxValue: number
    startValue: number
    settings: boolean
    error: boolean
}


const initialState = {
    counter: 0,
    maxValue: 1,
    startValue: 0,
    settings: true,
    error: false
}



export const App = () => {
    const [value, setValue] = useState<initialStateType>(initialState)
    const {counter, maxValue, startValue, settings, error} = value

    const incrementCounter = () => {
        if(counter <= maxValue ) {
            setValue({...value, counter:  counter + 1})
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



    const disabledInc = counter === maxValue || settings  ? true : false
    const disabledReset =  counter ===  startValue || settings ? true : false
    return (
        <div className={s.app}>
            <div className={s.num}>
                <div className={counter === maxValue ? s.buttonError : ''} >{ counter}</div>
                <Button callBack={incrementCounter} disabled={disabledInc}>Inc</Button>
                <Button callBack={resetCounter} disabled={disabledReset}>Reset</Button>
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

