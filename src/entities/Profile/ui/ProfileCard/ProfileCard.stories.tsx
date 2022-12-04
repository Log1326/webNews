import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from 'entities/County';
import { Currency } from 'entities/Currency';
import { ProfileCard } from './ProfileCard';
import ava from '../../../../shared/assets/tests/storybook.jpg';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'pavel',
        age: 28,
        country: Country.Russia,
        first: 'Pavel',
        lastname: 'Motovilov',
        city: 'Rehovot',
        currency: Currency.USD,
        avatar: ava,
    },
};
export const WithError = Template.bind({});
WithError.args = {
    error: 'true',
};

export const isLoading = Template.bind({});
isLoading.args = {
    isLoading: true,
};
