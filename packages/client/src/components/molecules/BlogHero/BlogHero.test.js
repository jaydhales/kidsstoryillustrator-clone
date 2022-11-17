import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import BlogHero from '.';

test('component is rendered', () => {
    render(<BlogHero />);
});
