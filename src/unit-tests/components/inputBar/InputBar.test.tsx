import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { InputBar } from '../../../components/inputBar';

describe('InputBar', () => {
  const props = {
    isInInitialState: true,
    timerCount: 0,
    setTime: jest.fn(),
    time: 10,
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

  test('should call `setTime` function with correct value when input value changes', () => {
    render(<InputBar {...props} />);
    const input = screen.getByTestId('number-input') as HTMLInputElement;

    fireEvent.change(input, { target: { value: '01:30:00' } });

    expect(props.setTime).toHaveBeenCalledTimes(1);
    expect(props.setTime).toHaveBeenCalledWith(5400);
  });

  test('should disable input field when timer is running', () => {
    render(<InputBar {...props} isTimerRunning />);

    const input = screen.getByTestId('mock-input') as HTMLInputElement;

    expect(input.disabled).toBe(true);
  });

  test('should disable input field when not in initial state', () => {
    render(<InputBar {...props} isInInitialState={false} />);

    const input = screen.getByTestId('number-input') as HTMLInputElement;

    expect(input.disabled).toBe(true);
  });
});
