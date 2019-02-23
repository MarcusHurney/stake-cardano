// @flow
import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';
import { Block } from './Block';
import styles from './Space.module.scss';

export const Space = () => {
  const { innerHeight, innerWidth } = window;
  const [windowDimensions, setDimensions] = useState({ innerHeight, innerWidth });
  const handleResize = () => setDimensions({ innerHeight, innerWidth });
  const debouncedResize = debounce(handleResize, 300);

  useEffect(() => {
    window.addEventListener('resize', debouncedResize);
    return () => window.removeEventListener('resize', debouncedResize);
  }, [windowDimensions]);

  return (
    <div className={styles['space']}>
      <Block { ...windowDimensions } />
    </div>
  );
}