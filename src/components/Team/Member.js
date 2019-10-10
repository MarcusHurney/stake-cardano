// @flow
import React from 'react';
import styles from './Member.module.scss';
import classnames from 'classnames';

type Props = {
 bio: string,
 className: string,
 name: string,
 photo: string,
};

export const Member = (props: Props) => {
 console.log(props);
 return (
  <div className={classnames([props.className, styles.component])}>
   <h1>{props.name}</h1>
   <img src={props.photo} alt="teammate" />
  </div>
 );
};