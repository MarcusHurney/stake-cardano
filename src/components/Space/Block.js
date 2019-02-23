import React from 'react';
import block from '../../assets/svg/block.svg';
import styles from './Block.module.scss';

export const Block = () => (
  <img src={block} className={styles['block']} alt="block" />
);