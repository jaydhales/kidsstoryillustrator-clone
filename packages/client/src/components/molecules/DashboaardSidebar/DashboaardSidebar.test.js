import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DashboaardSidebar from './DashboaardSidebar';

test('component is rendered', () => {
    render(<DashboaardSidebar />);
});
