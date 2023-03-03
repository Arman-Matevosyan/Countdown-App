import React from 'react';
import { secondsToTime } from '../../helpers';

type Props = {
  isInInitialState: boolean;
  isTimerRunning: boolean;
  isInPauseState: boolean;
  timerCount: number;
  setTime: (value: string) => void;
  time: string;
};

const InputBar: React.FC<Props> = ({
  isInInitialState,
  isTimerRunning,
  isInPauseState,
  timerCount,
  setTime,
  time,
}) => {
  return (
    <div>
      <form>
        <label htmlFor="name">
          <input
            disabled={!isInInitialState && (isTimerRunning || isInPauseState)}
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
