// @flow
import React from 'react';
import UseAnimations from "react-useanimations";
import styles from './Member.module.scss';
import classnames from 'classnames';

type Props = {
 bio: string,
 className: string,
 githubURL?: string,
 linkedinURL: string,
 name: string,
 photo: string,
};

export const Member = (props: Props) => {
 const { bio, className, linkedinURL, name, photo } = props;
 return (
  <div className={classnames([styles.component, styles[className]])}>

   <span />
  
   <div className={styles.toprow_wrapper}>
    <h1 className={styles.name}>{name}</h1>

    {/* {githubURL && (
     <a href={githubURL} target="_blank" rel="noopener noreferrer">
      <UseAnimations
       className={classnames([styles.social_icon, styles.github_icon])}
       animationKey="github"
       size={40}
      />
     </a>
    )} */}

    <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
     <UseAnimations className={styles.social_icon} animationKey="linkedin" size={56} />
    </a>
   </div>
 
   <p className={styles.bio}>{bio}</p>

   <img src={photo} alt="teammate" />
  </div>
 );
};