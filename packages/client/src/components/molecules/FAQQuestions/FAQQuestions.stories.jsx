import React from 'react';

import FAQQuestions from '.';

export default {
    title: 'molecules/FAQQuestions',
    component: FAQQuestions,
    argTypes: {
    },
};

const Template = (args) => <FAQQuestions {...args} />;

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
