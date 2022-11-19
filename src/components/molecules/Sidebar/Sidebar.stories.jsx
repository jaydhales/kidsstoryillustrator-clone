import React from 'react';

import Sidebar from '.';

export default {
  title: 'molecules/Sidebar',
  component: Sidebar,
  argTypes: {},
};

const Template = args => <Sidebar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};

export const Large = Template.bind({});
Large.args = {};

export const Small = Template.bind({});
Small.args = {};
