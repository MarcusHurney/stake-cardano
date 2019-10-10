// @flow
import React from 'react';
import styles from './Member.module.scss';

type Props = {
 bio: string,
 name: string,
 photo: string,
};

export const Member = (props: Props) => {
 return (
  <div className={styles.component}>
   <h1>{props.name}</h1>
   <img src={props.photo} alt="teammate" />
  </div>
 );
};