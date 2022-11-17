import React from 'react';

import DashboardSidebar from '.';

export default {
    title: 'molecules/DashboardSidebar',
    component: DashboardSidebar,
    argTypes: {
    },
};

const Template = (args) => <DashboardSidebar {...args} />;

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
