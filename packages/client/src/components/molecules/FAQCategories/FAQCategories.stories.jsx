import React from 'react';

import FAQCategories from '.';

export default {
  title: 'molecules/FAQCategories',
  component: FAQCategories,
  argTypes: {},
};

const Template = args => <FAQCategories {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};

export const Large = Template.bind({});
Large.args = {};

export const Small = Template.bind({});
Small.args = {};
