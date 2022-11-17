import React from 'react';

import AboutUsCard from '.';

export default {
    title: 'molecules/AboutUsCard',
    component: AboutUsCard,
    argTypes: {
    },
};

const Template = (args) => <AboutUsCard {...args} />;

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
