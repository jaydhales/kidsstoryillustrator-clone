import React from 'react';

import DashboardSidebarLink from '.';

export default {
  title: 'atoms/DashboardSidebarLink',
  component: DashboardSidebarLink,
  argTypes: {},
};

const Template = args => <DashboardSidebarLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};

export const Large = Template.bind({});
Large.args = {};

export const Small = Template.bind({});
Small.args = {};
