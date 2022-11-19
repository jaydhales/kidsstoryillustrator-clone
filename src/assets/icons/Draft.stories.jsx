import React from 'react';

import Draft from './Draft';

export default {
  title: 'icons/Draft',
  component: Draft,
  argTypes: {},
};

const Template = args => <Draft {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};

export const Large = Template.bind({});
Large.args = {};

export const Small = Template.bind({});
Small.args = {};
