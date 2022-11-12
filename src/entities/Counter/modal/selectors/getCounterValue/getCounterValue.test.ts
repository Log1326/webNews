import { getCounterValue } from 'entities/Counter/modal/selectors/getCounterValue/getCounterValue';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProviders';

describe('getCounterValue.test', () => {
    test('', () => {
        const state:DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
