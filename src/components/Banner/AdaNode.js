import React, { Component } from 'react';
import { map } from 'lodash';
import styles from './Banner.module.scss';

export default class AdaNode extends Component {
  componentDidMount() {
    this.updateCSSVariables();
  }

  updateCSSVariables() {
    const variables = {
      '--fade-duration-1': `${Math.floor(Math.random() * 5) + 2}s`,
      '--fade-duration-2': `${Math.floor(Math.random() * 5) + 2}s`,
      '--fade-duration-3': `${Math.floor(Math.random() * 5) + 2}s`,
      '--fade-duration-4': `${Math.floor(Math.random() * 5) + 2}s`,
      '--fade-duration-5': `${Math.floor(Math.random() * 5) + 2}s`,
      '--fade-duration-6': `${Math.floor(Math.random() * 5) + 2}s`,
      '--fade-duration-7': `${Math.floor(Math.random() * 5) + 2}s`,
      '--fade-duration-8': `${Math.floor(Math.random() * 5) + 2}s`,
    };

    map(variables, (value, prop) => {
      document.documentElement.style.setProperty(prop, value);
    });
  }

  render() {
    return (
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={this.props.className}>
        <g>
          <path fill="#b5a7fa" className={styles['banner__logo-fade-1']}  d="m158.898438 167.722656h-61.796876c-43.808593 0-79.445312-35.636718-79.445312-79.445312 0-4.882813 3.953125-8.828125 8.828125-8.828125 4.871094 0 8.824219 3.945312 8.824219 8.828125 0 34.0625 27.71875 61.792968 61.792968 61.792968h61.796876c4.871093 0 8.824218 3.945313 8.824218 8.828126 0 4.878906-3.953125 8.824218-8.824218 8.824218zm0 0" />
          <path fill="#b5a7fa" className={styles['banner__logo-fade-2']}  d="m203.035156 467.863281h-70.621094c-4.875 0-8.828124-3.945312-8.828124-8.828125 0-4.882812 3.953124-8.828125 8.828124-8.828125h70.621094c24.335938 0 44.136719-19.800781 44.136719-44.136719 0-4.882812 3.957031-8.828124 8.828125-8.828124s8.828125 3.945312 8.828125 8.828124c0 34.0625-27.71875 61.792969-61.792969 61.792969zm0 0" />
          <path fill="#fff" className={styles['banner__logo-fade-3']}  d="m158.898438 361.929688h-105.933594c-4.871094 0-8.828125-3.945313-8.828125-8.828126 0-4.878906 3.957031-8.824218 8.828125-8.824218h105.933594c4.871093 0 8.824218 3.945312 8.824218 8.824218 0 4.882813-3.953125 8.828126-8.824218 8.828126zm0 0" />
          <path fill="#fff" d="m256 61.792969c-4.871094 0-8.828125-3.945313-8.828125-8.828125 0-9.734375-7.917969-17.65625-17.65625-17.65625h-44.136719c-4.871094 0-8.828125-3.945313-8.828125-8.824219 0-4.882813 3.957031-8.828125 8.828125-8.828125h44.136719c19.476563 0 35.3125 15.835938 35.3125 35.308594 0 4.882812-3.957031 8.828125-8.828125 8.828125zm0 0" />
          <path fill="#fff" d="m256 114.757812c-4.871094 0-8.828125-3.945312-8.828125-8.828124v-52.964844c0-4.882813 3.957031-8.828125 8.828125-8.828125s8.828125 3.945312 8.828125 8.828125v52.964844c0 4.882812-3.957031 8.828124-8.828125 8.828124zm0 0" />
          <path fill="#b5a7fa" className={styles['banner__logo-fade-5']} d="m326.621094 132.414062c-4.875 0-8.828125-3.945312-8.828125-8.828124 0-19.472657 15.835937-35.308594 35.308593-35.308594h26.484376c4.875 0 8.828124-3.957032 8.828124-8.828125v-26.484375c0-4.882813 3.953126-8.828125 8.828126-8.828125 4.871093 0 8.828124 3.945312 8.828124 8.828125v26.484375c0 14.601562-11.882812 26.480469-26.484374 26.480469h-26.484376c-9.734374 0-17.652343 7.917968-17.652343 17.65625 0 4.882812-3.957031 8.828124-8.828125 8.828124zm0 0" />
          <path fill="#b5a7fa" className={styles['banner__logo-fade-6']} d="m397.242188 264.828125c-4.875 0-8.828126-3.945313-8.828126-8.828125 0-19.472656 15.835938-35.308594 35.308594-35.308594h44.140625c4.871094 0 8.828125-3.957031 8.828125-8.828125v-44.140625c0-4.878906 3.953125-8.824218 8.824219-8.824218 4.875 0 8.828125 3.945312 8.828125 8.824218v44.140625c0 14.601563-11.878906 26.480469-26.480469 26.480469h-44.140625c-9.734375 0-17.652344 7.917969-17.652344 17.65625 0 4.882812-3.957031 8.828125-8.828124 8.828125zm0 0" />
          <path fill="#fff" className={styles['banner__logo-fade-7']} d="m485.515625 370.757812c-4.871094 0-8.824219-3.945312-8.824219-8.828124v-26.480469c0-4.875-3.957031-8.828125-8.828125-8.828125h-57.601562c-18.351563 0-30.675781-14.1875-30.675781-35.3125 0-4.878906 3.953124-8.824219 8.828124-8.824219 4.871094 0 8.828126 3.945313 8.828126 8.824219 0 5.316406 1.269531 17.65625 13.019531 17.65625h57.601562c14.601563 0 26.480469 11.882812 26.480469 26.484375v26.480469c0 4.882812-3.953125 8.828124-8.828125 8.828124zm0 0" />
          <path fill="#b5a7fa" d="m370.757812 441.378906c-4.871093 0-8.828124-3.945312-8.828124-8.828125 0-4.871093-3.953126-8.828125-8.828126-8.828125-19.472656 0-35.308593-15.835937-35.308593-35.308594 0-4.882812 3.953125-8.828124 8.828125-8.828124 4.871094 0 8.828125 3.945312 8.828125 8.828124 0 9.738282 7.917969 17.65625 17.652343 17.65625 14.601563 0 26.484376 11.878907 26.484376 26.480469 0 4.882813-3.953126 8.828125-8.828126 8.828125zm0 0" />
          <path fill="#b5a7fa" d="m370.757812 467.863281c-4.871093 0-8.828124-3.945312-8.828124-8.828125v-26.484375c0-4.878906 3.957031-8.828125 8.828124-8.828125 4.875 0 8.828126 3.949219 8.828126 8.828125v26.484375c0 4.882813-3.953126 8.828125-8.828126 8.828125zm0 0" />
        </g>
        <path fill="rgba(203, 203, 203, 0.4)" d="m406.070312 256c0 82.878906-67.191406 150.070312-150.070312 150.070312s-150.070312-67.191406-150.070312-150.070312 67.191406-150.070312 150.070312-150.070312 150.070312 67.191406 150.070312 150.070312zm0 0" />
        <path fill="#b5a7fa" className={styles['banner__logo-fade-1']} d="m52.964844 61.792969c0 14.625-11.855469 26.484375-26.480469 26.484375-14.628906 0-26.484375-11.859375-26.484375-26.484375s11.855469-26.484375 26.484375-26.484375c14.625 0 26.480469 11.859375 26.480469 26.484375zm0 0" />
        <path fill="#b5a7fa" className={styles['banner__logo-fade-2']} d="m185.378906 26.484375c0 14.625-11.855468 26.480469-26.480468 26.480469-14.628907 0-26.484376-11.855469-26.484376-26.480469 0-14.628906 11.855469-26.484375 26.484376-26.484375 14.625 0 26.480468 11.855469 26.480468 26.484375zm0 0" />
        <path fill="#fff" className={styles['banner__logo-fade-3']} d="m512 141.242188c0 14.625-11.855469 26.480468-26.484375 26.480468-14.625 0-26.480469-11.855468-26.480469-26.480468s11.855469-26.484376 26.480469-26.484376c14.628906 0 26.484375 11.859376 26.484375 26.484376zm0 0" />
        <path fill="#b5a7fa" className={styles['banner__logo-fade-4']} d="m397.242188 485.515625c0 14.628906-11.859376 26.484375-26.484376 26.484375s-26.480468-11.855469-26.480468-26.484375c0-14.625 11.855468-26.480469 26.480468-26.480469s26.484376 11.855469 26.484376 26.480469zm0 0" />
        <path fill="#b5a7fa" className={styles['banner__logo-fade-5']} d="m512 388.414062c0 14.625-11.855469 26.484376-26.484375 26.484376-14.625 0-26.480469-11.859376-26.480469-26.484376s11.855469-26.484374 26.480469-26.484374c14.628906 0 26.484375 11.859374 26.484375 26.484374zm0 0" />
        <path fill="#fff" className={styles['banner__logo-fade-6']} d="m132.414062 459.035156c0 14.625-11.855468 26.480469-26.484374 26.480469-14.625 0-26.480469-11.855469-26.480469-26.480469s11.855469-26.484375 26.480469-26.484375c14.628906 0 26.484374 11.859375 26.484374 26.484375zm0 0" />
        <path fill="#b5a7fa" className={styles['banner__logo-fade-7']} d="m52.964844 353.101562c0 14.628907-11.855469 26.484376-26.480469 26.484376-14.628906 0-26.484375-11.855469-26.484375-26.484376 0-14.625 11.855469-26.480468 26.484375-26.480468 14.625 0 26.480469 11.855468 26.480469 26.480468zm0 0" />
        <path fill="#b5a7fa" className={styles['banner__logo-fade-8']} d="m423.722656 26.484375c0 14.625-11.855468 26.480469-26.480468 26.480469s-26.484376-11.855469-26.484376-26.480469c0-14.628906 11.859376-26.484375 26.484376-26.484375s26.480468 11.855469 26.480468 26.484375zm0 0" />
      </svg>
    );
  }
}