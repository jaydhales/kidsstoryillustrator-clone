import React from 'react';

import Pricing from '.';

export default {
  title: 'pages/Pricing',
  component: Pricing,
  argTypes: {},
};

const Template = args => <Pricing {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};

export const Large = Template.bind({});
Large.args = {};

export const Small = Template.bind({});
Small.args = {};
