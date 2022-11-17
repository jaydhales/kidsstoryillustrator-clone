import React from 'react';

import FootLink from '.';

export default {
    title: 'atoms/FootLink',
    component: FootLink,
    argTypes: {
    },
};

const Template = (args) => <FootLink {...args} />;

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
