import React from 'react';

import Help from '.';

export default {
  title: 'pages/Help',
  component: Help,
  argTypes: {},
};

const Template = args => <Help {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};

export const Large = Template.bind({});
Large.args = {};

export const Small = Template.bind({});
Small.args = {};
