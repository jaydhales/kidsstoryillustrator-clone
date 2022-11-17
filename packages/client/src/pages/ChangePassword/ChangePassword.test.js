import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ChangePassword from './ChangePassword';

test('component is rendered', () => {
    render(<ChangePassword />);
});
