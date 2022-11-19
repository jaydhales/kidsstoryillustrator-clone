import React from 'react';

import Story from './Story';

export default {
  title: 'icons/Story',
  component: Story,
  argTypes: {},
};

const Template = args => <Story {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};

export const Large = Template.bind({});
Large.args = {};

export const Small = Template.bind({});
Small.args = {};
