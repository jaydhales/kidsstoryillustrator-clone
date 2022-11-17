import React from 'react';

import Testimonial from '.';

export default {
    title: 'molecules/Testimonial',
    component: Testimonial,
    argTypes: {
    },
};

const Template = (args) => <Testimonial {...args} />;

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
