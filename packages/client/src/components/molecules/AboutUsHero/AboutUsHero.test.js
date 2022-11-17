import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AboutUsHero from './AboutUsHero';

test('component is rendered', () => {
    render(<AboutUsHero />);
});
