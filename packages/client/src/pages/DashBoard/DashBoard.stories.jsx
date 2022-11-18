import React from 'react';

import DashBoard from '.';

export default {
  title: 'pages/DashBoard',
  component: DashBoard,
  argTypes: {},
};

const Template = args => <DashBoard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};

export const Large = Template.bind({});
Large.args = {};

export const Small = Template.bind({});
Small.args = {};
