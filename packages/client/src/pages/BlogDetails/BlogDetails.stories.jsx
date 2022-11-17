import React from 'react';

import BlogDetails from '.';

export default {
    title: 'Pages/BlogDetails',
    component: BlogDetails,
    argTypes: {
    },
};

const Template = (args) => <BlogDetails {...args} />;

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
