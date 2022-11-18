import React from 'react';

import CreateStory from '.';

export default {
  title: 'pages/CreateStory',
  component: CreateStory,
  argTypes: {},
};

const Template = args => <CreateStory {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};

export const Large = Template.bind({});
Large.args = {};

export const Small = Template.bind({});
Small.args = {};
