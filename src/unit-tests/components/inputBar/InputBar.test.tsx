import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { InputBar } from '../../../components/inputBar';

describe('InputBar', () => {
  const props = {
    isInInitialState: true,
    timerCount: 0,
    setTime: jest.fn(),
    time: '',
    isTimerRunning: false,
  };

  test('renders the component correctly', () => {
    render(<InputBar {...props} />);

    expect(screen.getByTestId('inputBar-container')).toBeInTheDocument();
  });

  test('should render the number input when not running', () => {
    render(<InputBar {...props} />);

    expect(screen.getByTestId('number-input')).toBeInTheDocument();
  });

  test('should render the time when running', () => {
    render(<InputBar {...props} isTimerRunning timerCount={60} />);

    expect(screen.getByTestId('mock-input')).toHaveValue(
      '00 hr : 01 min : 00 sec'
    );
  });

  test('should calls `setTime` function when input is changed', () => {
    render(<InputBar {...props} />);
    const input = screen.getByTestId('number-input');

    fireEvent.change(input, { target: { value: '60' } });
    expect(props.setTime).toHaveBeenCalledWith('60');
  });

  test('should display the formatted time when not running', () => {
    render(<InputBar {...props} time="60" timerCount={60} />);

    const formattedTime = screen.getByTestId('formatted-time');

    expect(formattedTime).toHaveTextContent('00 hr : 01 min : 00 sec');
  });
});
