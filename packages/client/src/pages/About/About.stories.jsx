import React from 'react';

import About from '.';

export default {
    title: 'Pages/About',
    component: About,
    argTypes: {
    },
};

const Template = (args) => <About {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

export const Secondary = Template.bind({});
Secondary.args = {
    main: true,
};

export const Large = Template.bind({});
Large.args = {
    main: false,
};

export const Small = Template.bind({});
Small.args = {
    main: true,
};
