import React, { Component } from 'react';
import { Banner } from './components/Banner/Banner';
import { Logo } from './components/Logo/Logo';
import { Navbar } from './components/Navbar/Navbar';
import { Space } from './components/Space/Space';
import appStyles from './App.module.scss';
import logoStyles from './components/Logo/Logo.module.scss';

class App extends Component {
  render() {
    return (
      <div className={appStyles['app']}>
        <Navbar />
        <div className={appStyles['deep_space_wrapper']}>
          <div className={appStyles['deep_space_visuals']}>
            <Logo styles={logoStyles} />
            <Space>
              <Banner />
            </Space>
          </div>
          <div className={appStyles['deep_space_content']}>
            <h1>Let's Decentralize Cardano</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
