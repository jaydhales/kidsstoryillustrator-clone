import React from 'react';

import Profile from '.';

export default {
  title: 'pages/Profile',
  component: Profile,
  argTypes: {},
};

const Template = args => <Profile {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};

export const Large = Template.bind({});
Large.args = {};

export const Small = Template.bind({});
Small.args = {};
