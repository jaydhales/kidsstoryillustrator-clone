import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import StoryPreviewCard from './StoryPreviewCard';

test('component is rendered', () => {
    render(<StoryPreviewCard />);
});
