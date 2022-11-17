import React from 'react';

import BlogPost from '.';

export default {
    title: 'molecules/BlogPost',
    component: BlogPost,
    argTypes: {
    },
};

const Template = (args) => <BlogPost {...args} />;

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
