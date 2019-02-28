// @flow
import React, { useEffect, useState } from 'react';
import { Logo } from '../Logo/Logo';
import { throttle } from 'lodash';
import styles from './Navbar.module.scss';

export const Navbar = () => {
   const [navbarIsVisible, handleScroll] = useState(false);

  const toggleVisibility = (): void => {
    const visible: boolean = window.scrollY >= window.innerHeight ? true : false;
    handleScroll(visible);
  };

  const listenerParams = ['scroll', throttle(toggleVisibility, 150)];

  useEffect(() => {
    window.addEventListener(...listenerParams);
    return () => window.removeEventListener(...listenerParams);
  });

  if (!navbarIsVisible) { return null; }
  return (
    <nav className={styles['navbar']} role="navigation" aria-label="navigation bar">
      <div className={styles['navbar_logo_container']}>
        <Logo className={styles['navbar_logo']} />
      </div>
    </nav>
  );
}