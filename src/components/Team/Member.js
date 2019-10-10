// @flow
import React from 'react';
import styles from './Member.module.scss';
import Marcus from '../../assets/images/Marcus.png';

type Props = {
 bio: string,
 name: string
};

export const Member = (props: Props) => {
 return (
  <div className={styles.component}>
   <h1>{props.name}</h1>
   <img src={Marcus} alt="teammate" />
  </div>
 );
};