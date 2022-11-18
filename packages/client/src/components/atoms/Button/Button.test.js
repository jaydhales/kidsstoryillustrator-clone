import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from '.';

test('component is rendered', () => {
  render(<Button />);
});
