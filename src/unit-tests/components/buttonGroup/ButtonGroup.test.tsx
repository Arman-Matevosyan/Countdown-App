import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ButtonGroup } from '../../../components/buttonGroup';

describe('ButtonGroup', () => {
  const props = {
    isTimerRunning: false,
    isInInitialState: true,
    stopTimer: jest.fn(),
    setTimer: jest.fn(),
  };

  test('should render btn-group Correctly', async () => {
    render(<ButtonGroup {...props} />);
    const container = await screen.findByTestId('btn-group');

    expect(container).toBeInTheDocument();
  });

  test('should disable the `stop` button if the isInInitialState is `true`', async () => {
    render(<ButtonGroup {...props} />);
    const btn = await screen.findByTestId('btn-stop');

    expect(btn).toBeDisabled();
  });

  test('should call the `setTimer` function on play button click', async () => {
    render(<ButtonGroup {...props} />);
    const btn = await screen.findByTestId('btn-play');

    fireEvent.click(btn);
    expect(props.setTimer).toHaveBeenCalled();
  });

  test('should be able to click on stopTimer if `isTimerRuning` and `isInInitialState` is `false` is `true`', async () => {
    const isTimerRunningProps = {
      isTimerRunning: true,
      isInInitialState: false,
      stopTimer: jest.fn(),
      setTimer: jest.fn(),
    };

    render(<ButtonGroup {...isTimerRunningProps} />);
    const btn = await screen.findByTestId('btn-play');

    fireEvent.click(btn);
    expect(props.setTimer).toHaveBeenCalled();

    const stopBtn = await screen.findByTestId('btn-stop');

    expect(stopBtn).not.toBeDisabled();
  });
});
