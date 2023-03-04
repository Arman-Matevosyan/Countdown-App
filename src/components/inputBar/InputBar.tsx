import React, { useState, useCallback } from 'react';
import InputMask from 'react-input-mask';
import { stringToSeconds } from '../../helpers';
import { secondsToTime } from '../../helpers/helpers';
import styles from './InputBar.module.scss';

type Props = {
  isInInitialState: boolean;
  timerCount: number;
  setTime: (e: any) => void;
  isTimerRunning: boolean;
  time: number;
};

const InputBar: React.FC<Props> = ({
  isInInitialState,
  timerCount,
  setTime,
  isTimerRunning,
  time,
}) => {
  const [inputVal, setInputVal] = useState('');

  const handleChange = useCallback(
    (val: string) => {
      setInputVal(val);
      const convertedSeconds = stringToSeconds(val);

      if (convertedSeconds) {
        setTime(convertedSeconds);
      }
    },
    [setTime]
  );

  return (
    <div className={styles.inputBarContainer} data-testid="inputBar-container">
      {isTimerRunning ? (
        <input
          disabled
          data-testid="mock-input"
          value={secondsToTime(timerCount)}
        />
      ) : (
        <InputMask
          disabled={!isInInitialState}
          mask="99:99:99"
          maskChar="-"
          placeholder="hr:min:sec"
          value={inputVal || secondsToTime(time)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(e.target.value)
          }
        />
      )}
    </div>
  );
};

export default InputBar;
