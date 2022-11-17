import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Carousel from './Carousel';

test('component is rendered', () => {
    render(<Carousel />);
});
