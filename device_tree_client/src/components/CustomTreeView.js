import React from 'react';
import { useSelector } from 'react-redux';

//MUI Stuff
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import CircularProgress from './../UI/CircularProgress';
import CustomNode from './CustomNode';

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
    paddingTop : 20, 
  },
});

const CustomTree = (props) => {
  const classes = useStyles();
  const { root, typeRoot, loading, error } = useSelector((state) => state);

  return (
    <div>
      {loading && (<CircularProgress/>)}
      {!error && !loading && <TreeView
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        <CustomNode data={props.tabValue === 0 ? root : typeRoot} />
      </TreeView>}
      {error && <h1>Fetching Error</h1>}
    </div>
  );
}
export default CustomTree;
