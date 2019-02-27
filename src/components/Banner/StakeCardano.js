import React from 'react';
import styles from './StakeCardano.module.scss';

export const StakeCardano = () => (
  <div className={styles.logo}>
    <span className={styles.stake}>
      stake<span className={styles.cardano}>CARDANO</span>
    </span>
  </div>
);