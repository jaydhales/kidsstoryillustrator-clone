import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Testimonial from './Testimonial';

test('component is rendered', () => {
  render(<Testimonial />);
});
