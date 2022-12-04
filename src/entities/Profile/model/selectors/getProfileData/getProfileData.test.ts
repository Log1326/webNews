import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/County';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
    test('should return data', () => {
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
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should return error', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
