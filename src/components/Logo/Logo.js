import React from 'react';
import styles from './Logo.module.scss';

export const Logo = (props) => (
  <div className={`${styles.logo} ${props.className}`}>
    <div className={styles['stake']}>stake</div>
    <div className={styles['cardano']}>
      cardan
    </div>
    <div className={styles['cardano-logo']}>
      <div className={styles['cardano-logo-container']}></div>
      <span>o</span>
    </div>
  </div>
);