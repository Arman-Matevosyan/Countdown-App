import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '../../sections/Header';

describe('Header', () => {
  test('should render Header Correctly', async () => {
    render(<Header />);
    const container = await screen.findByTestId('header-container');

    expect(container).toBeInTheDocument();
  });
});
