import React from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.headerContainer} data-testid="header-container" />
  );
};

export default Header;
