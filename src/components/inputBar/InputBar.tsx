import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { stringToSeconds } from '../../helpers';
import { secondsToTime } from '../../helpers/helpers';
import styles from './InputBar.module.scss';

type Props = {
  isInInitialState: boolean;
  timerCount: number;
  setTime: (e: any) => void;
  isTimerRunning: boolean;
};

const InputBar: React.FC<Props> = ({
  isInInitialState,
  timerCount,
  setTime,
  isTimerRunning,
}) => {
  const [inputVal, setInputVal] = useState('');

  const handleChange = (val: string) => {
    const convertedSeconds = stringToSeconds(val);

    setInputVal(val);
    if (convertedSeconds) {
      setTime(convertedSeconds);
    }
  };

  return (
    <div className={styles.inputBarContainer} data-testid="inputBar-container">
      {isTimerRunning ? (
        <input
          disabled
          className={styles.mockInput}
          data-testid="mock-input"
          value={secondsToTime(timerCount)}
        />
      ) : (
        <InputMask
          disabled={!isInInitialState}
          mask="99:99:99"
          maskChar="-"
          placeholder="hr:min:sec"
          value={inputVal}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(e.target.value)
          }
        />
      )}
    </div>
  );
};

export default InputBar;
