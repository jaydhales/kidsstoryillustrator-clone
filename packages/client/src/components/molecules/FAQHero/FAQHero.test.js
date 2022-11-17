import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FAQHero from '.';

test('component is rendered', () => {
    render(<FAQHero />);
});
