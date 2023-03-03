import React from 'react';
import { Icon } from '../../assets/uiComponents/Icon';
import { useCountdown } from '../../hooks';
import useInput from '../../hooks/useInput';
import styles from './Home.module.scss';

const Home: React.FC = () => {
  const { resetTimer, isTimerRunning, timerCount, setTimer, stopTimer } =
    useCountdown({
      initialSeconds: 30,
    });

  return (
    <main className={styles.container} data-testid="home-container">
      <button onClick={setTimer}>
        <Icon icon={isTimerRunning ? 'pause' : 'play2'} />
      </button>
      <button onClick={resetTimer}>Reset</button>
      <button disabled={!isTimerRunning} onClick={stopTimer}>
        Stop
      </button>
      {isTimerRunning}
      {timerCount}
    </main>
  );
};

export default Home;
