import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DetailsInput from '.';

test('component is rendered', () => {
  render(<DetailsInput />);
});
