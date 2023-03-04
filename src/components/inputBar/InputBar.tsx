import React, { useCallback } from 'react';
import { secondsToTime } from '../../helpers';
import styles from './InputBar.module.scss';

type Props = {
  isInInitialState: boolean;
  timerCount: number;
  setTime: (e: any) => void;
  time: string;
  isTimerRunning: boolean;
};

const InputBar: React.FC<Props> = ({
  isInInitialState,
  timerCount,
  setTime,
  time,
  isTimerRunning,
}) => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      if (Number(value) >= 0) {
        setTime(value);
      }
    },
    [setTime]
  );

  return (
    <div className={styles.inputBarContainer} data-testid="inputBar-container">
      <form>
        <label htmlFor="name">
          {isTimerRunning ? (
            <input
              disabled
              className={styles.mockInput}
              data-testid="mock-input"
              value={secondsToTime(timerCount)}
            />
          ) : (
            <>
              <input
                data-testid="number-input"
                disabled={!isInInitialState}
                placeholder="Enter seconds"
                type="number"
                value={time}
                onChange={(e) => handleChange(e)}
              />
              <p data-testid="formatted-time">{secondsToTime(timerCount)}</p>
            </>
          )}
        </label>
      </form>
    </div>
  );
};

export default InputBar;
