import React from 'react';
import s from './App.module.css'
import {Counter} from "../Counter/Counter";
import {useSelector} from "react-redux";

import {AppStateType} from "../../redux/store";
import FormSubmit from "../FormSubmit/FormSubmit";




export type initialStateType = {
    counter: number
    maxValue: number
    startValue: number
    settings: boolean
}


export const App = () => {
    const {settings}  = useSelector<AppStateType, initialStateType>(state => state)
    return (
        <div className={s.app}>
            { settings ?
                <div>
                    <FormSubmit/>
                </div> :
                <div className={s.num}>
                    <Counter/>
                </div>
            }
        </div>
    );
}

