import React from 'react';

import Carousel from '.';

export default {
    title: 'molecules/Carousel',
    component: Carousel,
    argTypes: {
    },
};

const Template = (args) => <Carousel {...args} />;

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
