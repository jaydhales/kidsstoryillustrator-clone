import React from 'react';

import TextInput from '.';

export default {
    title: 'atoms/TextInput',
    component: TextInput,
    argTypes: {
    },
};

const Template = (args) => <TextInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

export const Secondary = Template.bind({});
Secondary.args = {
};

export const Large = Template.bind({});
Large.args = {
};

export const Small = Template.bind({});
Small.args = {
};
