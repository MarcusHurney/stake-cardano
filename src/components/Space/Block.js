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
  // TODO
  // 1. check if block has run into innerHeight or innerWidth
  // 2. if it has then change it's orientation angle and speed to bounce it in the opposite direction
  // 3. look at pong for implementation detials
  // 4. burn block if it hits the cloud?
  return <img src={block} className={styles['block']} alt="block" />;
}