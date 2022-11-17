import React from 'react';

import BlogHero from '.';

export default {
    title: 'molecules/BlogHero',
    component: BlogHero,
    argTypes: {
    },
};

const Template = (args) => <BlogHero {...args} />;

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
