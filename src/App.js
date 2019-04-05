import React, { Component } from 'react';
import { Grid } from './components/Layout/Grid';
import { GridItem } from './components/Layout/GridItem';
import { Gutter } from './components/Layout/Gutter';
import { Banner } from './components/Banner/Banner';
import { Logo } from './components/Logo/Logo';
import { Navbar } from './components/Navbar/Navbar';
import { Space } from './components/Space/Space';
import appStyles from './App.module.scss';
import logoStyles from './components/Logo/Logo.module.scss';
import customGrid from './customGrid.module.scss';
import SimpleGrid from './components/Layout/Grid.module.scss';

class App extends Component {
  render() {
    const templateAreas = [
      'sidebar header header header',
      'sidebar content content aside',
      'sidebar content content aside',
      'footer footer footer footer'
    ];

    return (
      <div className={appStyles['app']}>
        <Navbar />
        <Gutter padding="10vh 10vw">
          <Grid
          theme={SimpleGrid}
          themeOverrides={customGrid}
          template="repeat(4, 1fr) / repeat(4, 1fr)"
          templateAreas={templateAreas}
          gap={10}
          >
            <GridItem gridArea="content">
              <h1>Let's Decentralize Cardano</h1>
            </GridItem>

            <GridItem gridArea="sidebar">
              <div className={appStyles['deep_space_wrapper']}>
                <div className={appStyles['deep_space_visuals']}>
                  <Logo styles={logoStyles} />
                    <Space>
                      <Banner />
                  </Space>
                </div>
              </div>
            </GridItem>

            <GridItem gridArea="header">
              <p>Let's Decentralize Cardano</p>
            </GridItem>

            <GridItem gridArea="footer">
              <h1>Let's Decentralize Cardano</h1>
            </GridItem>

            <GridItem gridArea="aside">
              <p>Let's Decentralize Cardano</p>
            </GridItem>
          </Grid>
        </Gutter>
      </div>
    );
  }
}

export default App;
