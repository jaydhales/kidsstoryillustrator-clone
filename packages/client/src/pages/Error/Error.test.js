import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Error from './Error';

test('component is rendered', () => {
    render(<Error />);
});
