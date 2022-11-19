import React from 'react';

import Book from '.';

export default {
  title: 'icons/Book',
  component: Book,
  argTypes: {},
};

const Template = args => <Book {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};

export const Large = Template.bind({});
Large.args = {};

export const Small = Template.bind({});
Small.args = {};
