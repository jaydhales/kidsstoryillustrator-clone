import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import BlogDetails from './BlogDetails';

test('component is rendered', () => {
    render(<BlogDetails />);
});
