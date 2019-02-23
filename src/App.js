import React, { Component } from 'react';
import { Banner } from './components/Banner/Banner';
import { Space } from './components/Space/Space';
import styles from './App.module.scss';

class App extends Component {
  render() {
    return (
      <div className={styles['app']}>
        <Space />
        <div className={styles['app__content']}>
          <Banner />
        </div>
      </div>
    );
  }
}

export default App;
