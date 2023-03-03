import React from 'react';
import { Icon } from '../../assets/uiComponents/Icon';
import styles from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <main className={styles.container} data-testid="home-container">
      Hello React App
      <Icon icon="pause" />
    </main>
  );
};

export default Home;
