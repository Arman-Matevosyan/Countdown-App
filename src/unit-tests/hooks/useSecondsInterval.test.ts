/* eslint-disable jest/no-hooks */
import { renderHook } from '@testing-library/react-hooks';
import { useSecondsInterval } from '../../hooks';

describe('useSecondsInterval', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('should call the `callback` function every second', () => {
    const callback = jest.fn();

    renderHook(() => useSecondsInterval(callback));

    jest.advanceTimersByTime(5000);

    expect(callback).toHaveBeenCalledTimes(5);
  });

  test('should not call the `callback` function when unmounted', () => {
    const callback = jest.fn();

    const { unmount } = renderHook(() => useSecondsInterval(callback));

    unmount();

    jest.advanceTimersByTime(5000);

    expect(callback).toHaveBeenCalledTimes(0);
  });
});
