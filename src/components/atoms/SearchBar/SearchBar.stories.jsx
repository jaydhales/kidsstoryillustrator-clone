import React from 'react';

import SearchBar from '.';

export default {
  title: 'atoms/SearchBar',
  component: SearchBar,
  argTypes: {},
};

const Template = args => <SearchBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};

export const Large = Template.bind({});
Large.args = {};

export const Small = Template.bind({});
Small.args = {};
