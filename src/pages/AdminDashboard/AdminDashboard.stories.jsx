import React from 'react';

import AdminDashboard from '.';

export default {
  title: 'pages/AdminDashboard',
  component: AdminDashboard,
  argTypes: {},
};

const Template = args => <AdminDashboard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};

export const Large = Template.bind({});
Large.args = {};

export const Small = Template.bind({});
Small.args = {};
