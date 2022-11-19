import React from 'react';

import Add from './Add';

export default {
  title: 'icons/Add',
  component: Add,
  argTypes: {},
};

const Template = args => <Add {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};

export const Large = Template.bind({});
Large.args = {};

export const Small = Template.bind({});
Small.args = {};
