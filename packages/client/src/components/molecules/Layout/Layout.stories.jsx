import React from 'react';

import Layout from '.';

export default {
    title: 'Molecules/Layout',
    component: Layout,
    argTypes: {
    },
};

const Template = (args) => <Layout {...args} />;

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
