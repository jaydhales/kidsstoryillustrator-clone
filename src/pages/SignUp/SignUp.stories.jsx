import React from 'react';

import SignUp from '.';

export default {
  title: 'pages/SignUp',
  component: SignUp,
  argTypes: {},
};

const Template = args => <SignUp {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};

export const Large = Template.bind({});
Large.args = {};

export const Small = Template.bind({});
Small.args = {};
