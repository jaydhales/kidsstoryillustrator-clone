import React from 'react';

import FAQHero from '.';

export default {
  title: 'molecules/FAQHero',
  component: FAQHero,
  argTypes: {},
};

const Template = args => <FAQHero {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};

export const Large = Template.bind({});
Large.args = {};

export const Small = Template.bind({});
Small.args = {};
