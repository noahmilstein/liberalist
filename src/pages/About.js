import React from 'react';
import { Link } from 'react-router-dom';
import {Tabs, Tab} from 'material-ui/Tabs';
import GetInvolved from './components/tabs/About.GetInvolved';
import AboutUs from './components/tabs/About.AboutUs';
import Reading from './components/tabs/About.Reading';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const About = () => {
  return (
    <div id="about">
      <MuiThemeProvider>
        <Tabs>
          <Tab label="About Us">
            <AboutUs/>
          </Tab>
          <Tab label="Reading">
            <Reading/>
          </Tab>
          <Tab label="GetInvolved">
            <GetInvolved/>
          </Tab>
        </Tabs>
      </MuiThemeProvider>
    </div>
  )
}

export default About;
