import React from 'react';
import { Icon } from '../../assets/uiComponents/Icon';

type Props = {
  isTimerRunning: boolean;
  isInInitialState: boolean;
  stopTimer: () => void;
  setTimer: () => void;
};

const ButtonGroup: React.FC<Props> = ({
  isTimerRunning,
  isInInitialState,
  stopTimer,
  setTimer,
}) => {
  return (
    <>
      <button type="button" onClick={setTimer}>
        <Icon icon={isTimerRunning ? 'pause' : 'play2'} />
      </button>
      <button disabled={isInInitialState} type="button" onClick={stopTimer}>
        <Icon icon="stop" />
      </button>
    </>
  );
};

export default ButtonGroup;
