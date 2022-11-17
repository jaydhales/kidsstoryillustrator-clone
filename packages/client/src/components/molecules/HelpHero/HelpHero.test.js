import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import HelpHero from './HelpHero';

test('component is rendered', () => {
    render(<HelpHero />);
});
