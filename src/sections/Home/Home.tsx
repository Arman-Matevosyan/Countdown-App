import React, { useEffect, useState } from 'react';
import { ButtonGroup } from '../../components/buttonGroup';
import { InputBar } from '../../components/inputBar';
import { ProgressBar } from '../../components/progressBar';
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

  const [currentHeight, setCurrentHeight] = useState(0);

  useEffect(() => {
    if (isInInitialState) {
      setCurrentHeight(0);
    } else {
      const percentage = ((time - timerCount) / time) * 100;

      setCurrentHeight(percentage > 100 ? 100 : percentage);
    }
  }, [isInInitialState, timerCount, time]);

  return (
    <main data-testid="home-container">
      <div className={styles.container}>
        <ProgressBar
          currentHeight={currentHeight}
          isInInitialState={isInInitialState}
        />
        <InputBar
          isInInitialState={isInInitialState}
          isInPauseState={isInPauseState}
          isTimerRunning={isTimerRunning}
          setTime={setTime}
          time={time}
          timerCount={timerCount}
        />

        <ButtonGroup
          isInInitialState={isInInitialState}
          isTimerRunning={isTimerRunning}
          setTimer={setTimer}
          stopTimer={stopTimer}
        />
      </div>
    </main>
  );
};

export default Home;
