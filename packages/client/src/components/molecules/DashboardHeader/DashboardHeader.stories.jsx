import React from 'react';

import DashboardHeader from '.';

export default {
  title: 'molecules/DashboardHeader',
  component: DashboardHeader,
  argTypes: {},
};

const Template = args => <DashboardHeader {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};

export const Large = Template.bind({});
Large.args = {};

export const Small = Template.bind({});
Small.args = {};
