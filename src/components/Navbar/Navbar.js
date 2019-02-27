import React, { Component } from 'react';
import styles from './Navbar.module.scss';

// put this in a effect hook
// let navbarVisible = scrollY > innerHeight ? 'visible' : 'hidden';
// document.documentElement.style.setProperty('--navbar-visibility', navbarVisible);

export class Navbar extends Component {
  render() {
    console.log(window.scrollY);
    const hidden = window.scrollY > window.innerHeight ? styles['hidden'] : null;
    return (
      <nav className={hidden} role="navigation" aria-label="main navigation">
        <div className={styles['navbar-brand']}>
          <h1 className={styles['navbar-item']}>
            Logo
          </h1>
        </div>
      </nav>
    );
  }
}