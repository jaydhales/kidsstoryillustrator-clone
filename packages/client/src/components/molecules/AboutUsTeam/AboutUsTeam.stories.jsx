import React from 'react';

import AboutUsTeam from '.';

export default {
  title: 'molecules/AboutUsTeam',
  component: AboutUsTeam,
  argTypes: {},
};

const Template = args => <AboutUsTeam {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};

export const Large = Template.bind({});
Large.args = {};

export const Small = Template.bind({});
Small.args = {};
