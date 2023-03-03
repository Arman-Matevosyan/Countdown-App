import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footerContainer} data-testid="footer-container" />
  );
};

export default Footer;
