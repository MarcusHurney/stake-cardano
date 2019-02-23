// @flow
import React from 'react';
import block from '../../assets/svg/block.svg';
import styles from './Block.module.scss';

type Props = {
  innerHeight: number,
  innerWidth: number,
};

export const Block = (props: Props) => {
  const { innerHeight, innerWidth } = props;
  console.log(`
    innerHeight: ${innerHeight},
    innerWidth: ${innerWidth}
  `);
  return <img src={block} className={styles['block']} alt="block" />;
}