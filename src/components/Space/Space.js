import React from 'react';
import { Block } from './Block';
import styles from './Space.module.scss';

export const Space = () => (
  <div className={styles['space']}>
    <Block />
  </div>
);