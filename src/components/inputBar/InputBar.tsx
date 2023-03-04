import React from 'react';
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
  return (
    <div className={styles.inputBarContainer} data-testid="inputBar-container">
      <form>
        <label htmlFor="name">
          {isTimerRunning ? (
            <input
              disabled
              data-testid="mock-input"
              value={secondsToTime(timerCount)}
            />
          ) : (
            <>
              <input
                className={styles.inputBar}
                data-testid="number-input"
                disabled={!isInInitialState}
                placeholder="Enter seconds"
                type="number"
                value={time}
                onChange={(e) => setTime(e.target.value)}
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
