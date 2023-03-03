import { useCallback, useState } from 'react';
import useSecondsInterval from './useSecondsInterval';

const useCountDown = ({
  initialSeconds = 0,
  initiallyRunning = false,
} = {}) => {
  const [timerCount, setTimerCount] = useState(initialSeconds);
  const [isTimerRunning, setRunning] = useState(initiallyRunning);

  const tick = useCallback(
    () => (isTimerRunning ? setTimerCount((prev) => prev - 1) : initialSeconds),
    [isTimerRunning, initialSeconds]
  );

  const setTimer = () =>
    isTimerRunning ? setRunning(false) : setRunning(true);

  const resetTimer = () => setTimerCount(initialSeconds);

  const stopTimer = () => {
    setTimer();
    resetTimer();
  };

  useSecondsInterval(tick);

  return {
    setTimer,
    resetTimer,
    isTimerRunning,
    timerCount,
    stopTimer,
  };
};

export default useCountDown;
