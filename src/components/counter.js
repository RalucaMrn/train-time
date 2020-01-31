import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles(theme => ({
  border: {
    background: 'white',
    border: '1px solid #0D47A1',
    borderRadius: '50%',
    borderColor: 'blue',
    color: 'black',
    height: 42,
    width: 42
  }
}));

export default function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count === 0) {
      return 
    } 
    setCount(count - 1);
  };

  const classes = useStyles();

  return (
    <div className="counter">
      <h4 style={{textAlign:"center"}}>How many guests will come with you?</h4>
      <div className="counter-align">
        <Fab className={classes.border} onClick={() => decrement()}  aria-label="add">
          <RemoveIcon />
        </Fab>
        {count}
        <Fab className={classes.border} onClick={() => increment()} aria-label="add">
          <AddIcon />
        </Fab>
      </div>
      
    </div>
  );
};
