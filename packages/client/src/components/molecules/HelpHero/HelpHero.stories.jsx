import React from 'react';

import HelpHero from '.';

export default {
  title: 'molecules/HelpHero',
  component: HelpHero,
  argTypes: {},
};

const Template = args => <HelpHero {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};

export const Large = Template.bind({});
Large.args = {};

export const Small = Template.bind({});
Small.args = {};
