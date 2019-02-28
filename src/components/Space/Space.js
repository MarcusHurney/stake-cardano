// @flow
import React, { useEffect } from 'react';
import type { Node } from 'react';
import { debounce, map } from 'lodash';
import { Block } from './Block';
import { BREAKPOINTS } from '../../utils/constants';
import styles from './Space.module.scss';

const updateCSSVariables = () => {
  const { innerHeight, innerWidth } = window;
  const { SMALL, MEDIUM } = BREAKPOINTS;

  let cssVariables: Object = {
    '--window-inner-height': innerHeight,
    '--window-inner-width': innerWidth,
  };

  if (innerWidth <= SMALL) {
    cssVariables['--space-height'] = 325;
    cssVariables['--space-width'] = 325;
    cssVariables['--banner-height'] = 250;
    cssVariables['--banner-width'] = 250;
    cssVariables['--floating-block-height'] = 30;
    cssVariables['--floating-block-width'] = 30;
    cssVariables['--float-animation-endpoint'] = cssVariables['--space-width'] - cssVariables['--floating-block-width'];
    cssVariables['--float-animation-midpoint'] = cssVariables['--float-animation-endpoint'] / 2;
  } else if (innerWidth > SMALL && innerWidth <= MEDIUM) {
    cssVariables['--space-height'] = 375;
    cssVariables['--space-width'] = 375;
    cssVariables['--banner-height'] = 300;
    cssVariables['--banner-width'] = 300;
    cssVariables['--floating-block-height'] = 35;
    cssVariables['--floating-block-width'] = 35;
    cssVariables['--float-animation-endpoint'] = cssVariables['--space-width'] - cssVariables['--floating-block-width'];
    cssVariables['--float-animation-midpoint'] = cssVariables['--float-animation-endpoint'] / 2;
  } else if (innerWidth > MEDIUM) {
    cssVariables['--space-height'] = 425;
    cssVariables['--space-width'] = 425;
    cssVariables['--banner-height'] = 350;
    cssVariables['--banner-width'] = 350;
    cssVariables['--floating-block-height'] = 40;
    cssVariables['--floating-block-width'] = 40;
    cssVariables['--float-animation-endpoint'] = cssVariables['--space-width'] - cssVariables['--floating-block-width'];
    cssVariables['--float-animation-midpoint'] = cssVariables['--float-animation-endpoint'] / 2;
  }

  map(cssVariables, (value, prop) => {
    if (document.documentElement && document.documentElement.style) {
      document.documentElement.style.setProperty(prop, `${value}px`);
    }
  });
};

export const Space = ({ children }: { children: Node }) => {
  updateCSSVariables();

  const listenerParams = ['resize', debounce(updateCSSVariables, 300)];
  useEffect(() => {
    window.addEventListener(...listenerParams);
    return () => window.removeEventListener(...listenerParams);
  });

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
      {children}
    </div>
  );
}