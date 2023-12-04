import React from 'react';
import { render } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

test('renders NewBoxForm component without crashing', () => {
  render(<NewBoxForm />);
});

test('NewBoxForm component snapshot', () => {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});
