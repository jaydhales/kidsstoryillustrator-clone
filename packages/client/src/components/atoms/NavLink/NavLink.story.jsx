import React from 'react';

import NavLink from '.';

export default {
    title: 'NavLink',
    component: NavLink,
    argTypes: {
    },
};

const Template = (args) => <NavLink {...args} />;

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
