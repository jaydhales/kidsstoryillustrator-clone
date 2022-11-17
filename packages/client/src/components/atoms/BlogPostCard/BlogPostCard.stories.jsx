import React from 'react';

import BlogPostCard from '.';

export default {
    title: 'atoms/BlogPostCard',
    component: BlogPostCard,
    argTypes: {
    },
};

const Template = (args) => <BlogPostCard {...args} />;

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
