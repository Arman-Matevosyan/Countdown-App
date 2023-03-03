import React from 'react';
import styles from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <main className={styles.container} data-testid="home-container">
      Hello React App
    </main>
  );
};

export default Home;
