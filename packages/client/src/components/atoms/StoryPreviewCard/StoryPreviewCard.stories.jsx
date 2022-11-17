import React from 'react';

import StoryPreviewCard from '.';

export default {
    title: 'atoms/StoryPreviewCard',
    component: StoryPreviewCard,
    argTypes: {
    },
};

const Template = (args) => <StoryPreviewCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

export const Secondary = Template.bind({});
Secondary.args = {
};

export const Large = Template.bind({});
Large.args = {
};

export const Small = Template.bind({});
Small.args = {
};
