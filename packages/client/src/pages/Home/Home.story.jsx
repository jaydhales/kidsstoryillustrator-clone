import React from 'react';

import Home from '.';

export default {
    title: 'Home',
    component: Home,
    argTypes: {
    },
};

const Template = (args) => <Home {...args} />;

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
