import React from 'react';

import DashboaardSidebar from '.';

export default {
    title: 'molecules/DashboaardSidebar',
    component: DashboaardSidebar,
    argTypes: {
    },
};

const Template = (args) => <DashboaardSidebar {...args} />;

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
