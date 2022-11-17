import React from 'react';

import HowToUse from './HowToUse';

export default {
    title: 'HowToUse',
    component: HowToUse,
    argTypes: {
    },
};

const Template = (args) => <HowToUse {...args} />;

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
