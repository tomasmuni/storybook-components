import { MyLabel } from "../../components/MyLabel";
import { Secondary } from '../Button.stories';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: "UI/MyLabel",
    component: MyLabel,
    argTypes: {
        size: {control: 'select'},
        color: {control: 'select'}
    }
} as ComponentMeta<typeof MyLabel>

const Template:ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />

export const Basica = Template.bind({});

export const AllCaps = Template.bind({});
AllCaps.args = {
    size: 'normal',
    allCaps: true,
}

export const Second = Template.bind({});
Second.args = {
    size: 'normal',
    color: 'secondary',
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    size: 'normal',
    color: 'tertiary',
}

export const CustomColor = Template.bind({});
CustomColor.args = {
    size: 'normal',
    fontColor: '#f4580b',
}