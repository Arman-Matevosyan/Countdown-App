import React from 'react';
import { secondsToTime } from '../../helpers';
import styles from './InputBar.module.scss';

type Props = {
  isInInitialState: boolean;
  timerCount: number;
  setTime: (value: string) => void;
  time: string;
};

const InputBar: React.FC<Props> = ({
  isInInitialState,
  timerCount,
  setTime,
  time,
}) => {
  return (
    <div className={styles.inputBarContainer} data-testid="inputBar-container">
      <form>
        <label htmlFor="name">
          <input
            className={styles.inputBar}
            data-testid="number-input"
            disabled={!isInInitialState}
            type="number"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <p>{secondsToTime(timerCount)}</p>
        </label>
      </form>
    </div>
  );
};

export default InputBar;
