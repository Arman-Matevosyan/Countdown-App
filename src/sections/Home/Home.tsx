import React, { useState } from 'react';
import { ButtonGroup } from '../../components/buttonGroup';
import { InputBar } from '../../components/inputBar';
import { ProgressBar } from '../../components/progressBar';
import { useCountdown, useHeightCalculator } from '../../hooks';
import styles from './Home.module.scss';

const Home: React.FC = () => {
  const [time, setTime] = useState(0);

  const { isTimerRunning, isInInitialState, timerCount, setTimer, stopTimer } =
    useCountdown({
      initialSeconds: time,
    });

  const { currentHeight } = useHeightCalculator({
    isInInitialState,
    time,
    timerCount,
  });

  return (
    <main data-testid="home-container">
      <div className={styles.container}>
        <ProgressBar
          currentHeight={currentHeight}
          isInInitialState={isInInitialState}
        />
        <InputBar
          isInInitialState={isInInitialState}
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
