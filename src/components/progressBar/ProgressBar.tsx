import React from 'react';
import styles from './ProgressBar.module.scss';

type Props = {
  currentHeight: number;
  isInInitialState: boolean;
};

const ProgressBar: React.FC<Props> = ({ currentHeight, isInInitialState }) => {
  return (
    <div
      className={styles.countdownBox}
      data-testid="progressBar-container"
      style={{
        border: !isInInitialState ? '1px solid white' : '',
      }}
    >
      <div
        className={styles.timeElapsed}
        data-testid="elapsed-container"
        style={{
          height: `${currentHeight}%`,
        }}
      />
    </div>
  );
};

export default ProgressBar;
