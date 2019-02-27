import React from 'react';
// import node from '../../assets/svg/node.svg';
import styles from './Logo.module.scss';

export const Logo = () => (
  <div className={styles.logo}>
    <span className={styles.stake}>
      stake
      <span className={styles.cardano}>
        CARDANO
        {/* <img src={node} alt="node-logo" /> */}
      </span>
    </span>
  </div>
);