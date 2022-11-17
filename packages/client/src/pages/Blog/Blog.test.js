import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Blog from './Blog';

test('component is rendered', () => {
    render(<Blog />);
});
