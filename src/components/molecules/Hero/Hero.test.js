import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Hero from './Hero';

test('component is rendered', () => {
  render(<Hero />);
});
