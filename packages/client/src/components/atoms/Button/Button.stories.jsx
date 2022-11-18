import React from 'react';

import Button from '.';

export default {
  title: 'atoms/Button',
  component: Button,
  argTypes: {},
};

const Template = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};

export const Large = Template.bind({});
Large.args = {};

export const Small = Template.bind({});
Small.args = {};
