import {initialStateType} from "../App";
import {counterReducer, incrementCounterAC} from "./counter-reducer";


test('correct counter increment', () => {
    const startState = {counter: 0, maxValue: 2, startValue: 0}
    const endState = counterReducer(startState, incrementCounterAC() )

    expect(endState).toBe(1)
})