import React from 'react';

import FAQ from '.';

export default {
  title: 'pages/FAQ',
  component: FAQ,
  argTypes: {},
};

const Template = args => <FAQ {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};

export const Large = Template.bind({});
Large.args = {};

export const Small = Template.bind({});
Small.args = {};
