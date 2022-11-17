import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import About from './About';

test('component is rendered', () => {
    render(<About />);
});
