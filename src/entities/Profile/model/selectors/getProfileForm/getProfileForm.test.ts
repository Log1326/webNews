import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/County';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileFrom', () => {
    test('should return from', () => {
        const data = {
            username: 'pavel',
            age: 28,
            country: Country.Russia,
            first: 'Pavel',
            lastname: 'Motovilov',
            city: 'Rehovot',
            currency: Currency.USD,
        };
        const state:DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });
    test('should return error', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
