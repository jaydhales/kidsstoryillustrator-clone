import React from 'react';

import DashboardTable from '.';

export default {
    title: 'molecules/DashboardTable',
    component: DashboardTable,
    argTypes: {
    },
};

const Template = (args) => <DashboardTable {...args} />;

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
