import React from 'react';

import AboutUsHero from '.';

export default {
  title: 'molecules/AboutUsHero',
  component: AboutUsHero,
  argTypes: {},
};

const Template = args => <AboutUsHero {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};

export const Large = Template.bind({});
Large.args = {};

export const Small = Template.bind({});
Small.args = {};
