import {initialStateType} from "../App";
import {counterReducer, incrementCounterAC} from "./counter-reducer";


test('correct counter increment', () => {
    const startState = {counter: 0}
    const endState = counterReducer(startState, )

    expect(endState).toBe(1)
})