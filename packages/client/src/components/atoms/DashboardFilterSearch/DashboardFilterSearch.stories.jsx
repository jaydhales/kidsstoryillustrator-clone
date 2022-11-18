import React from 'react';

import DashboardFilterSearch from '.';

export default {
  title: 'atoms/DashboardFilterSearch',
  component: DashboardFilterSearch,
  argTypes: {},
};

const Template = args => <DashboardFilterSearch {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};

export const Large = Template.bind({});
Large.args = {};

export const Small = Template.bind({});
Small.args = {};
