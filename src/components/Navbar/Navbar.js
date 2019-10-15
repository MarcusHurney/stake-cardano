// @flow
import React, { useEffect, useState } from 'react';
import { Logo } from '../Logo/Logo';
import { throttle } from 'lodash';
import styles from './Navbar.module.scss';
import logoStyles from './NavbarLogo.module.scss';

export const Navbar = () => {
  const [navbarIsVisible, handleScroll] = useState(false);

  const toggleVisibility = (): void => {
    const visible: boolean = window.scrollY >= window.innerHeight - 350 ? true : false;
    handleScroll(visible);
  };

  const scrollToForm = () => {
    const subscribeForm = document.getElementById('subscribeForm');
    const nameInput = document.getElementById('nameInput');
    if (subscribeForm && nameInput) {
      subscribeForm.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        nameInput.focus();
      }, 500);
    }
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
        <Logo styles={logoStyles} />
      </div>
      <div className={styles['subscribeBtnWrapper']}>
        <button className={styles['subscribeBtn']} onClick={scrollToForm}>Subscribe</button>
      </div>
    </nav>
  );
}