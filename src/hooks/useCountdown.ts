import { useCallback, useState, useEffect } from 'react';
import useSecondsInterval from './useSecondsInterval';

const useCountDown = ({
  initialSeconds = 30,
  initiallyRunning = false,
} = {}) => {
  const [timerCount, setTimerCount] = useState(initialSeconds);
  const [isTimerRunning, setRunning] = useState(initiallyRunning);
  const [isInInitialState, setInitialeState] = useState(true);
  const minMinToRun = 0;

  useEffect(() => {
    if (initialSeconds) {
      setTimerCount(initialSeconds);
    }
  }, [initialSeconds]);

  const tick = useCallback(
    () =>
      isTimerRunning && timerCount !== minMinToRun
        ? setTimerCount((prev) => prev - 1)
        : setRunning(false),
    [isTimerRunning, initialSeconds, timerCount]
  );

  const setTimer = () => {
    if (!isTimerRunning && initialSeconds && initialSeconds > 0) {
      setRunning(true);
      setInitialeState(false);
    } else {
      setRunning(false);
    }
  };

  const resetTimer = () => setTimerCount(initialSeconds);

  const stopTimer = () => {
    setInitialeState(true);
    setRunning(false);
    resetTimer();
  };

  useSecondsInterval(tick);

  return {
    setTimer,
    isTimerRunning,
    timerCount,
    isInInitialState,
    stopTimer,
  };
};

export default useCountDown;
