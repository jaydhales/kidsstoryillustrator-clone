import React from 'react';

import ProtectedRoute from '.';

export default {
    title: 'molecules/ProtectedRoute',
    component: ProtectedRoute,
    argTypes: {
    },
};

const Template = (args) => <ProtectedRoute {...args} />;

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
