import React, { useEffect, useState } from 'react';
import { Icon } from '../../assets/uiComponents/Icon';
import { secondsToTime } from '../../helpers';
import { useCountdown } from '../../hooks';
import styles from './Home.module.scss';

const Home: React.FC = () => {
  const [time, setTime] = useState(0);

  const {
    isTimerRunning,
    isInInitialState,
    isInPauseState,
    timerCount,
    setTimer,
    stopTimer,
  } = useCountdown({
    initialSeconds: time,
  });

  useEffect(() => {
    if (isInInitialState) {
      setTime(0);
    }
  }, [isInInitialState]);

  return (
    <main className={styles.container} data-testid="home-container">
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
      <button onClick={setTimer}>
        <Icon icon={isTimerRunning ? 'pause' : 'play2'} />
      </button>
      <button disabled={isInInitialState} onClick={stopTimer}>
        Stop
      </button>
      {isTimerRunning}
    </main>
  );
};

export default Home;
