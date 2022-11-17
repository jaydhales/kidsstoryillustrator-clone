import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Pricing from './Pricing';

test('component is rendered', () => {
    render(<Pricing />);
});
