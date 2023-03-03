import React from 'react';
import { Icon } from '../../assets/uiComponents/Icon';
import styles from './ButtonGroup.module.scss';

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
    <div className={styles.buttonGroupContainer}>
      <button className={styles.btnPlay} type="button" onClick={setTimer}>
        <Icon icon={isTimerRunning ? 'pause' : 'play2'} size={18} />
      </button>
      <button
        className={styles.btnStop}
        disabled={isInInitialState}
        type="button"
        onClick={stopTimer}
      >
        <Icon icon="stop" size={18} />
      </button>
    </div>
  );
};

export default ButtonGroup;
