import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Navbar from './Navbar';

test('component is rendered', () => {
    render(<Navbar />);
});
