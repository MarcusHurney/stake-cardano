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
 const { bio, className, name, photo } = props;

 return (
  <div className={classnames([className, styles.component])}>
   <span />
   <span className={styles.name}>{name}</span>
   <p className={styles.bio}>{bio}</p>
   <img src={photo} alt="teammate" />
  </div>
 );
};