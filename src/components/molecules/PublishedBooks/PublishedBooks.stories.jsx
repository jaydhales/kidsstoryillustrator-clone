import React from 'react';

import PublishedBooks from '.';

export default {
  title: 'molecules/PublishedBooks',
  component: PublishedBooks,
  argTypes: {},
};

const Template = args => <PublishedBooks {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};

export const Large = Template.bind({});
Large.args = {};

export const Small = Template.bind({});
Small.args = {};
