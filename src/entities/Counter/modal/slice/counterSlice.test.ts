import { counterReducer, counterActions } from './counterSlice';
import { CounterSchema } from '../types/counterSchema';

describe('counterSlice.test', () => {
    test('dec', () => {
        const state:CounterSchema = { value: 10 };
        expect(counterReducer(state, counterActions.dec())).toEqual({ value: 9 });
    });
    test('inc', () => {
        const state:CounterSchema = { value: 10 };
        expect(counterReducer(state, counterActions.inc())).toEqual({ value: 11 });
    });
    test('initial', () => {
        expect(counterReducer(undefined, counterActions.inc())).toEqual({ value: 1 });
    });
});
