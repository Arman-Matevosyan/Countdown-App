import React from 'react';
import styles from './ProgressBar.module.scss';

type Props = {
  currentHeight: number;
};

const ProgressBar: React.FC<Props> = ({ currentHeight }) => {
  return (
    <div className={styles.countdownBox}>
      <div
        className={styles.timeElapsed}
        style={{
          height: `${currentHeight}%`,
        }}
      />
    </div>
  );
};

export default ProgressBar;
