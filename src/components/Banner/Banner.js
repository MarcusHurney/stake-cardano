import React from 'react';
import AdaNode from './AdaNode';
import adaLogo from '../../assets/svg/ada-logo.svg';
import styles from './Banner.module.scss';

export const Banner = () => (
  <div className={styles['banner']}>
    <div className={styles['banner__moon']} />
    <div className={styles['banner__logo']}>
      <AdaNode className={styles['banner__logo-network']} />
      <img src={adaLogo} className={styles['banner__logo-ada']} alt="ada-logo" />
    </div>
  </div>
);