import React from 'react';

import blockName from '.';

export default {
    title: 'molecules/blockName',
    component: blockName,
    argTypes: {
    },
};

const Template = (args) => <blockName {...args} />;

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
