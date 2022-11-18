import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Layout from './Layout';

test('component is rendered', () => {
  render(<Layout />);
});
