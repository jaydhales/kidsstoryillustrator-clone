import React, { FC, ReactNode } from 'react';

import { render as rtlRender } from '@testing-library/react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from '../utils/services/store';

const Wrapper = ({ children }) => (
  <Provider store={store}>
    <BrowserRouter>{children}</BrowserRouter>
  </Provider>
);
Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
const render = (ui, { route = '/logIn' } = {}, wrapper = Wrapper) => {
  window.history.pushState({}, 'Test page', route);
  return rtlRender(ui, { wrapper });
};

// eslint-disable-next-line
export * from '@testing-library/react';
// override render method and export history

// eslint-disable-next-line
export { render };
