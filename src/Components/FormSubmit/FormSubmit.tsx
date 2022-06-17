import React, {ChangeEvent, FormEvent} from 'react';
import s from "../App/App.module.css";
import {Button} from "../Button";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {initialStateType} from "../App/App";
import {handleOnChangeInputMaxAC, handleSubmitAC, OnChangeInputStartAC} from "../../reducer/counter-reducer";



const FormSubmit = () => {
    const dispatch = useDispatch()
    const {maxValue, startValue} = useSelector<AppStateType, initialStateType>(state => state)

    const handleOnChangeInputMax = (e: ChangeEvent<HTMLInputElement>) => {
        if(Number(e.currentTarget.value) >=0) {
            dispatch(handleOnChangeInputMaxAC(Number(e.currentTarget.value)))
        }
        // setMaxValue(e.currentTarget.value)
    }

    const handleOnChangeInputStart = (e: ChangeEvent<HTMLInputElement>) => {
        if(Number(e.currentTarget.value) >=0) dispatch(OnChangeInputStartAC(Number(e.currentTarget.value)))
        //setValue({...value, startValue: Number(e.currentTarget.value)})

    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // setValue({...value, counter: startValue, settings: false})
        dispatch(handleSubmitAC())
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className={maxValue === startValue || maxValue < 0 ? s.inputError : ''} type='number' value={ maxValue}   onChange={ handleOnChangeInputMax}/>
                <input  className={startValue >= maxValue || startValue < 0 ? s.inputError : ''} type='number'  value={ startValue} onChange={handleOnChangeInputStart}/>
                <Button type={'submit'} >Set</Button>
            </form>
        </div>
    );
};

export default FormSubmit;