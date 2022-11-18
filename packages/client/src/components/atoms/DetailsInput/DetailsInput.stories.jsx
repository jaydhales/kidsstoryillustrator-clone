import React from 'react';

import DetailsInput from '.';

export default {
  title: 'atoms/DetailsInput',
  component: DetailsInput,
  argTypes: {},
};

const Template = args => <DetailsInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};

export const Large = Template.bind({});
Large.args = {};

export const Small = Template.bind({});
Small.args = {};
