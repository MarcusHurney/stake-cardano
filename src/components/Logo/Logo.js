// @flow
import React from 'react';

type Props = {
  styles: {
    'logo_container': string,
    'stake_text': string,
    'cardano_text': string,
    'cardano_logo_container': string,
    'cardano_logo': string,
  }
};

export const Logo = (props: Props) => (
  <div className={props.styles['logo_container']}>
    <div className={props.styles['stake_text']}>stake</div>
    <div className={props.styles['cardano_text']}>
      cardan
    </div>
    <div className={props.styles['cardano_logo_container']}>
      <div className={props.styles['cardano_logo']}></div>
      <span>o</span>
    </div>
  </div>
);