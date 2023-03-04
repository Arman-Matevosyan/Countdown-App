import { renderHook } from '@testing-library/react-hooks';
import { useHeightCalculator } from '../../hooks';

describe('useHeightCalculator', () => {
  test('should set the current height to 0 when in initial state', () => {
    const props = {
      isInInitialState: true,
      time: 30,
      timerCount: 0,
    };

    const { result } = renderHook(() => useHeightCalculator(props));

    expect(result.current.currentHeight).toBe(0);
  });

  test('should set the current height based on the timer count and `time` when not in initial state', () => {
    const props = {
      isInInitialState: false,
      time: 30,
      timerCount: 10,
    };

    const { result } = renderHook(() => useHeightCalculator(props));

    expect(result.current.currentHeight).toBe(66.66666666666666);
  });
});
