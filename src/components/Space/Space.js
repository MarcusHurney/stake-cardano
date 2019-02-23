import React, { Component } from 'react';
import { Block } from './Block';
import styles from './Space.module.scss';

export class Space extends Component {
  render() {
    return (
      <div className={styles['space']}>
        <Block />
      </div>
    );
  }
}