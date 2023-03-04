/* eslint-disable jest/no-hooks */
import { renderHook, act } from '@testing-library/react-hooks';
import useCountDown from '../../hooks/useCountdown';

describe('useCountDown', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('should initialize with the correct initial state', () => {
    const { result } = renderHook(() => useCountDown({ initialSeconds: 30 }));

    expect(result.current.timerCount).toBe(30);
    expect(result.current.isTimerRunning).toBe(false);
    expect(result.current.isInInitialState).toBe(true);
  });

  test('should start the countdown when calling `setTimer`', () => {
    const { result } = renderHook(() => useCountDown({ initialSeconds: 30 }));

    act(() => {
      result.current.setTimer();
    });

    expect(result.current.isTimerRunning).toBe(true);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(result.current.timerCount).toBe(29);
  });

  test('should stop the countdown when calling `stopTimer`', () => {
    const { result } = renderHook(() => useCountDown({ initialSeconds: 30 }));

    act(() => {
      result.current.setTimer();
    });

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    act(() => {
      result.current.stopTimer();
    });

    expect(result.current.isTimerRunning).toBe(false);
    expect(result.current.timerCount).toBe(30);
    expect(result.current.isInInitialState).toBe(true);
  });

  test('should update `timerCount` when `initialSeconds` prop changes', () => {
    const { result, rerender } = renderHook(
      ({ initialSeconds }) => useCountDown({ initialSeconds }),
      { initialProps: { initialSeconds: 30 } }
    );

    expect(result.current.timerCount).toBe(30);

    rerender({ initialSeconds: 20 });

    expect(result.current.timerCount).toBe(20);
  });
});
