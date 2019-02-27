import React, { Component } from 'react';
import { Banner } from './components/Banner/Banner';
import { StakeCardano } from './components/Banner/StakeCardano';
import { Space } from './components/Space/Space';
import styles from './App.module.scss';

class App extends Component {
  render() {
    return (
      <div className={styles['app']}>
        <div className={styles['app__content']}>
          <StakeCardano />
          <Space>
            <Banner />
          </Space>
        </div>
      </div>
    );
  }
}

export default App;
