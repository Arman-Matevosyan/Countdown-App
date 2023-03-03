import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from '../../sections/Footer';

describe('Footer', () => {
  test('should render Footer Correctly', async () => {
    render(<Footer />);
    const container = await screen.findByTestId('footer-container');

    expect(container).toBeInTheDocument();
  });
});
