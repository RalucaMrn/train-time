import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove'
import { Counter } from './components/counter.js';


const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
    backgroundColor: 'white'
  },
  border: {
    color: 'blue'
  }
}));

export default function CounterStyle() {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Fab size="small" aria-label="add" onClick={Counter.increment} className={classes.margin}>
          <RemoveIcon />
        </Fab>
        <Fab size="small" color="white" aria-label="add" className={classes.margin}>
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
}
