// @flow
import React, { useState, useEffect } from 'react';
import { debounce, map } from 'lodash';
import { Block } from './Block';
import styles from './Space.module.scss';

type WindowProps = {
  innerHeight: number,
  innerWidth: number,
};

const updateCSSVariables = ({ innerHeight, innerWidth }: WindowProps) => {
    const variables = {
      '--window-inner-height': `${innerHeight - 40}px`,
      '--window-inner-width': `${innerWidth - 40}px`,
    };

    map(variables, (value, prop) => {
      document.documentElement.style.setProperty(prop, value);
    });
};

export const Space = (props) => {
  const { innerHeight, innerWidth } = window;
  updateCSSVariables({ innerHeight, innerWidth });
  const [windowDimensions, setDimensions] = useState({ innerHeight, innerWidth });

  const handleResize = () => {
    updateCSSVariables({ innerHeight, innerWidth });
    setDimensions({ innerHeight, innerWidth });
  };

  const debouncedResize = debounce(handleResize, 300);

  useEffect(() => {
    window.addEventListener('resize', debouncedResize);
    return () => window.removeEventListener('resize', debouncedResize);
  }, [windowDimensions]);

  return (
    <div className={styles['space']}>
      <Block name="top-left" />
      <Block name="top-middle" />
      <Block name="top-right" />
      <Block name="right-middle" />
      <Block name="bottom-right" />
      <Block name="bottom-middle" />
      <Block name="bottom-left" />
      <Block name="left-middle" />
      {props.children}
    </div>
  );
}