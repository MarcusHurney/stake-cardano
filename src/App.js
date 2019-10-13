import React, { Component } from 'react';
import { Grid } from './components/Layout/Grid';
import { GridItem } from './components/Layout/GridItem';
import { Gutter } from './components/Layout/Gutter';
import { Banner } from './components/Banner/Banner';
import { Logo } from './components/Logo/Logo';
import { Member } from './components/Team/Member';
import { Navbar } from './components/Navbar/Navbar';
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
import { teamBios } from './components/Team/bios';

class App extends Component {
  render() {
    const gridLayout = [
      '. logo logo logo logo logo logo .',
      '. banner banner banner banner mission mission .',
      '. banner banner banner banner mission mission .',
      '. banner banner banner banner mission mission .',
      '. . philippe philippe philippe philippe . .',
      '. . philippe philippe philippe philippe . .',
      'jeremy jeremy jeremy jeremy vaclav vaclav vaclav vaclav',
      'jeremy jeremy jeremy jeremy vaclav vaclav vaclav vaclav',
      '. . marcus marcus marcus marcus . .',
      '. . marcus marcus marcus marcus . .',
    ];

    const { philippeBio, marcusBio, jeremyBio, vaclavBio } = teamBios;

    return (
      <div className={appStyles['app']}>
        <Navbar />
        <Gutter padding="5vh 10vw 5vh 10vw">
          <Grid
            theme={SimpleGrid}
            autoRows
            columns={'repeat(8, 1fr)'}
            templateAreas={gridLayout}
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
                className="philippe"
                bio={philippeBio}
                name="Philippe Pierre-Antoine"
                photo={Philippe}
              />
            </GridItem>

            <GridItem className={customGrid['team']} gridArea="marcus">
              <Member
                className="marcus"
                bio={marcusBio}
                name="Marcus Hurney"
                photo={Marcus}
              />
            </GridItem>

            <GridItem className={customGrid['team']} gridArea="jeremy">
              <Member
                className="jeremy"
                bio={jeremyBio}
                name="Jeremy Quinn"
                photo={Jeremy}
              />
            </GridItem>

             <GridItem className={customGrid['team']} gridArea="vaclav">
              <Member
                className="vaclav"
                bio={vaclavBio}
                name="Václav Navrátil"
                photo={Vaclav}
              />
            </GridItem>
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
