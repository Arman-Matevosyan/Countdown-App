import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProgressBar } from '../../../components/progressBar';

describe('ProgressBar', () => {
  const props = {
    currentHeight: 10,
    isInInitialState: true,
  };

  test('should render ProgressBar Correctly', async () => {
    render(<ProgressBar {...props} />);
    const container = await screen.findByTestId('progressBar-container');

    expect(container).toBeInTheDocument();
  });

  test('should not render any border if the `isInInitialState` is `true`', async () => {
    render(<ProgressBar {...props} />);
    const container = await screen.findByTestId('progressBar-container');
    const styles = getComputedStyle(container);

    expect(styles.border).toBe('');
  });

  test('should have the height of `currentHeight%``', async () => {
    render(<ProgressBar {...props} />);
    const container = await screen.findByTestId('elapsed-container');
    const styles = getComputedStyle(container);

    expect(styles.height).toBe(`${props.currentHeight}%`);
  });
});
