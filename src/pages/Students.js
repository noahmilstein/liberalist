import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import College from './components/tabs/Students.College';
import HighSchool from './components/tabs/Students.HighSchool';
import General from './components/tabs/Students.General';

const Students = () => {
  return (
    <div id="studentsWrapper">
      <MuiThemeProvider>
        <Tabs id="studentsTabs">
          <Tab
            id="studentsTab"
            label="Students">
            <General/>
          </Tab>
          <Tab
            id="collegeTab"
            label="College">
            <College/>
          </Tab>
          <Tab
            id="highSchoolTab"
            label="High School">
            <HighSchool/>
          </Tab>
        </Tabs>
      </MuiThemeProvider>
    </div>
  )
}

export default Students;
