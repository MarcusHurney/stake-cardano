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
      'banner header header mission',
      'banner header header mission',
      'banner team team team',
      'hardware team team team'
    ];

    return (
      <div className={appStyles['app']}>
        <Navbar />
        <Gutter padding="10vh 10vw">
          <Grid
          theme={SimpleGrid}
          template="repeat(4, 1fr) / repeat(4, 1fr)"
          templateAreas={templateAreas}
          themeOverrides={customGrid}
          gap={20}
          >
            <GridItem className={customGrid.banner} gridArea="banner">
              <div className={appStyles['deep_space_wrapper']}>
                <div className={appStyles['deep_space_visuals']}>
                  <Logo styles={logoStyles} />
                    <Space>
                      <Banner />
                  </Space>
                </div>
              </div>
            </GridItem>

            <GridItem className={customGrid['header']} gridArea="header">
              <div className={customGrid['header_content']}>
                <h1>Let's</h1>
                <h1>Decentralize</h1>
                <h1>Cardano</h1>
              </div>
              <span></span>
              <span></span>
              <span></span>
            </GridItem>

            

            <GridItem gridArea="team">
              <h1>team</h1>
            </GridItem>
          
            <GridItem gridArea="mission">
              <p>mission</p>
            </GridItem>

            <GridItem gridArea="hardware">
              <p>hardware</p>
            </GridItem>
          </Grid>
        </Gutter>
      </div>
    );
  }
}

export default App;
