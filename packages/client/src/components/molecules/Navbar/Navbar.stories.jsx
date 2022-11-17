import React from 'react';

import Navbar from '.';

export default {
    title: 'Molecules/Navbar',
    component: Navbar,
    argTypes: {
    },
};

const Template = (args) => <Navbar {...args} />;

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
