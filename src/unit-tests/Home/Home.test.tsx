import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from '../../sections/Home';

describe('Home', () => {
  test('should render Home Correctly', async () => {
    render(<Home />);
    const container = await screen.findByTestId('home-container');

    expect(container).toBeInTheDocument();
  });
});
