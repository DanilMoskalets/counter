// @flow
import * as React from 'react';
import s from "../App.module.css";
import {Button} from "./Button";
import {FC} from "react";

type counterPropsType = {
    counter: number
    maxValue: number
    startValue: number
    settings: boolean
};
export const Counter: FC<counterPropsType> = ({
                                                  counter,
                                                  maxValue,
                                                  startValue,
                                                  settings,
                                              }
  ) => {

    const handleIncrementCounter = () => {

    }

    const handleResetCounter = () => {

    }

    const disabledInc = counter === maxValue || settings  ? true : false
    const disabledReset =  counter ===  startValue || settings ? true : false
    return (
        <div>
            <div className={counter === maxValue ? s.buttonError : ''} >{ counter}</div>
            <Button callBack={handleIncrementCounter} disabled={disabledInc}>Inc</Button>
            <Button callBack={handleResetCounter} disabled={disabledReset}>Reset</Button>
        </div>
    );
};