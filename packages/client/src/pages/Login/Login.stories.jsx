import React from 'react';

import Login from '.';

export default {
  title: 'pages/Login',
  component: Login,
  argTypes: {},
};

const Template = args => <Login {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};

export const Large = Template.bind({});
Large.args = {};

export const Small = Template.bind({});
Small.args = {};
