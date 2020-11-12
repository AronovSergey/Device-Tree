import React from 'react';

//MUI Stuff
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const TabsBar = (props) => {
  return (
    <div>
      <Paper square>
        <Tabs
          value={props.tabValue}
          indicatorColor="primary"
          textColor="primary"
          onChange={props.handleTabChange}
          aria-label="disabled tabs example"
        >
          <Tab label="Tree View" />
          <Tab label="Grouping by type" />
        </Tabs>
      </Paper>
    </div>
  );
};

export default TabsBar;
