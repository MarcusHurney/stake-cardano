// @flow
import React from 'react';
import block from '../../assets/svg/block.svg';
import styles from './Block.module.scss';

type Props = {
  name: string,
};

export const Block = ({ name }: Props) => (
  <img src={block} className={styles[`float-${name}`]} alt="floating block" />
);