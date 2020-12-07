import React from 'react'
import { render, cleanup, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import axiosMock from 'axios'
import App from './App';

it('renders without crashing', function () {
  render(<MemoryRouter>
    <App />
  </MemoryRouter>);
});

it('matches the snapshot', function () {
  const { asFragment } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>);

    expect(asFragment).toMatchSnapshot();
});
