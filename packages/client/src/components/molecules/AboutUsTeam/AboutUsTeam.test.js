import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AboutUsTeam from './AboutUsTeam';

test('component is rendered', () => {
    render(<AboutUsTeam />);
});
