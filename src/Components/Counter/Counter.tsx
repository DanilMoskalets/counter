// @flow
import * as React from 'react';
import s from "../App/App.module.css";
import {Button} from "../Button";
import {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {initialStateType} from "../App/App";
import {AppStateType} from "../../redux/store";
import {incrementCounterAC, resetCounterAC, settingsStartAC} from "../../reducer/counter-reducer";

type counterPropsType = {};
export const Counter: FC<counterPropsType> = () => {
    const dispatch = useDispatch()
    const {counter, maxValue, startValue} = useSelector<AppStateType, initialStateType>(state => state)

    const handleIncrementCounter = () => {
        dispatch(incrementCounterAC())
    }

    const handleResetCounter = () => {
        dispatch(resetCounterAC())
    }

    const handleSettingsStart = () => {
      dispatch(settingsStartAC())
    }

    const disabledInc = counter === maxValue ? true : false
    const disabledReset = counter === startValue ? true : false
    return (
        <div>
            <div className={counter === maxValue ? s.buttonError : ''}>{counter}</div>
            <Button callBack={handleIncrementCounter} disabled={disabledInc}
            >Inc</Button>
            <Button callBack={handleResetCounter} disabled={disabledReset}
            >Reset</Button>
            <Button callBack={handleSettingsStart}>Setting</Button>
        </div>
    );
};