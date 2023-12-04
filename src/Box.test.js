import React from 'react';
import { render } from '@testing-library/react';
import Box from './Box';

test('renders Box component without crashing', () => {
  render(<Box id="1" width="100" height="100" backgroundColor="red" />);
});

test('Box component snapshot', () => {
  const { asFragment } = render(<Box id="1" width="100" height="100" backgroundColor="red" />);
  expect(asFragment()).toMatchSnapshot();
});

