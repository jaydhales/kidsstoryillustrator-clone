import React from 'react';

import blockName from './blockName';

export default {
  title: 'icons/blockName',
  component: blockName,
  argTypes: {},
};

const Template = args => <blockName {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};

export const Large = Template.bind({});
Large.args = {};

export const Small = Template.bind({});
Small.args = {};
