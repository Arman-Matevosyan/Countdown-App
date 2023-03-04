import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { InputBar } from '../../../components/inputBar';

describe('InputBar', () => {
  const props = {
    isInInitialState: true,
    timerCount: 1,
    setTime: jest.fn(),
    time: '1',
  };

  test('should render InputBar Correctly', async () => {
    render(<InputBar {...props} />);
    const container = await screen.findByTestId('inputBar-container');

    expect(container).toBeInTheDocument();
  });

  test('should call `setTime` function on user type', async () => {
    render(<InputBar {...props} />);
    const container = await screen.findByTestId('number-input');

    fireEvent.change(container, { target: { value: 'new value' } });
    expect(props.setTime).toHaveBeenCalled();
  });

  test('should disable the input if `isInInitialState` is `true`', async () => {
    const disabledProps = {
      isInInitialState: false,
      timerCount: 1,
      setTime: jest.fn(),
      time: '1',
    };

    render(<InputBar {...disabledProps} />);
    const container = await screen.findByTestId('number-input');

    expect(container).toBeDisabled();
  });
});
