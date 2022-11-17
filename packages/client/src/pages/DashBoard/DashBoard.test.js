import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DashBoard from './DashBoard';

test('component is rendered', () => {
    render(<DashBoard />);
});
