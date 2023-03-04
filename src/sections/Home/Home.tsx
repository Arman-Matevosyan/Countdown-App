import React, { useState } from 'react';
import { ButtonGroup } from '../../components/buttonGroup';
import { InputBar } from '../../components/inputBar';
import { ProgressBar } from '../../components/progressBar';
import { Tooltip } from '../../components/tooltip';
import { heightCalculator } from '../../helpers/helpers';
import { useCountdown } from '../../hooks';
import styles from './Home.module.scss';

const Home: React.FC = () => {
  const [time, setTime] = useState(0);

  const { isTimerRunning, isInInitialState, timerCount, setTimer, stopTimer } =
    useCountdown({
      initialSeconds: time,
    });

  return (
    <main data-testid="home-container">
      <div className={styles.container}>
        <ProgressBar
          currentHeight={heightCalculator({
            isInInitialState,
            time,
            timerCount,
          })}
          isInInitialState={isInInitialState}
        />
        <Tooltip
          isVisible={isInInitialState}
          text="Max allowed Numbers are 99:99:99"
        >
          <InputBar
            isInInitialState={isInInitialState}
            isTimerRunning={isTimerRunning}
            setTime={setTime}
            time={time}
            timerCount={timerCount}
          />
        </Tooltip>
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
