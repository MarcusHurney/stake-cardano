import React, { Component } from 'react';
import { Grid } from './components/Layout/Grid';
import { GridItem } from './components/Layout/GridItem';
import { Gutter } from './components/Layout/Gutter';
import { Banner } from './components/Banner/Banner';
import { Logo } from './components/Logo/Logo';
import { Member } from './components/Team/Member';
// import { Navbar } from './components/Navbar/Navbar';
import { Space } from './components/Space/Space';
import Subscribe from './components/Subscribe/Subscribe';
import appStyles from './App.module.scss';
import logoStyles from './components/Logo/Logo.module.scss';
import customGrid from './customGrid.module.scss';
import SimpleGrid from './components/Layout/Grid.module.scss';
import Philippe from './assets/images/Philippe.png';
import Marcus from './assets/images/Marcus.png';
import Jeremy from './assets/images/Jeremy.png';
import Vaclav from './assets/images/Vaclav.png';

class App extends Component {
  render() {
    const templateAreas = [
      '. logo logo logo logo',
      '. banner banner mission .',
      '. banner banner mission .',
      '. banner banner mission .',
      'philippe philippe philippe vaclav vaclav',
      'philippe philippe philippe vaclav vaclav',
      'jeremy jeremy marcus marcus marcus',
      'jeremy jeremy marcus marcus marcus'
    ];

    return (
      <div className={appStyles['app']}>
        {/* <Navbar /> */}
        <Gutter padding="5vh 10vw 5vh 10vw">
          <Grid
          theme={SimpleGrid}
          autoRows
          columns={'repeat(5, 1fr)'}
          templateAreas={templateAreas}
          themeOverrides={customGrid}
          gap={50}
          >
            <GridItem
              className={customGrid['logo']}
              gridArea="logo"
              alignSelf="flex-end"
            >
              <div className={appStyles['logo_wrapper_outer']}>
                <div className={appStyles['logo_wrapper_inner']}>
                  <Logo styles={logoStyles} />
                </div>
              </div>
            </GridItem>

            <GridItem className={customGrid['banner']} gridArea="banner">
              <Space className={customGrid['banner_moon']}>
                <Banner />
              </Space>
              <div className={customGrid['banner_content']}>
                <h1>Let's</h1>
                <h1>Decentralize</h1>
                <h1>Cardano</h1>
              </div>
              <span></span>
              <span></span>
              <span></span>
            </GridItem>

            <GridItem className={customGrid['mission']} gridArea="mission">
              <div className={customGrid['mission_title']}>
                <h1>Objectives</h1>
              </div>
              <div className={customGrid['mission_obj1']}>
                <h1>Fo</h1><h1>rtify</h1><p> the Cardano network</p>
                <p> by providing quality staking pools with constant uptime.</p>
              </div>
              <div className={customGrid['mission_obj2']}>
                <h1>Cr</h1><h1>eate</h1><p> passive income for</p>
                <p> our delegates through trusted nodes.</p>
              </div>
              <div className={customGrid['mission_obj3']}>
                <h1>Gr</h1><h1>ow</h1><p> the ecosystem</p>
                <p> by bringing new participants into the Cardano network.</p>
              </div>
              <span></span>
              <span></span>
              <span></span>
            </GridItem>

            <GridItem className={customGrid['team']} gridArea="philippe">
              <Member
                className={customGrid['philippe']}
                bio="All about these coins"
                name="Philippe"
                photo={Philippe}
              />
            </GridItem>
            <GridItem className={customGrid['team']} gridArea="marcus">
              <Member
                bio="All about these alt coins"
                className={customGrid['marcus']}
                name="Marcus"
                photo={Marcus}
              />
            </GridItem>
            <GridItem className={customGrid['team']} gridArea="jeremy">
              <Member
                bio="All about these alt coins"
                className={customGrid['jeremy']} 
                name="Jeremy"
                photo={Jeremy}
              />
            </GridItem>
             <GridItem className={customGrid['team']} gridArea="vaclav">
              <Member
                bio="All about these alt coins"
                className={customGrid['vaclav']}
                name="Vaclav"
                photo={Vaclav}
              />
            </GridItem>
            {/* <GridItem gridArea="team3">
              <Member bio="All about these coins" name="Philippe" />
            </GridItem> */}
          </Grid>
          <div className={appStyles['email_collection']}>
            <div className={appStyles['email_collection_wrapper']}>
              <h1>Stay</h1><h1>Notified</h1>
              <Subscribe />
            </div>
          </div>
        </Gutter>
      </div>
    );
  }
}

export default App;
