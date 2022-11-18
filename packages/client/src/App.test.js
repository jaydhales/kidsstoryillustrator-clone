import React from 'react';

import App from './App';
import { render, screen } from './testing-utils';

// All Pages where tested here
window.scrollTo = jest.fn();
describe('page-tests', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });
});
