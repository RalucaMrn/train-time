import React, { useState } from 'react';
import Icon from '@material-ui/core/Icon';
import plusButton from './../assets/png/plus-button.png'
import minusButton from './../assets/png/minus-button.png'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import { spacing } from '@material-ui/system';
import { makeStyles } from '@material-ui/core/styles';
import RemoveIcon from '@material-ui/icons/Remove';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  border: {
    background: 'white',
    border: '1px solid #0D47A1;',
    borderRadius: '50%',
    borderColor: 'blue',
    color: 'black',
    height: 42,
    width: 42
  },
  root: {

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
  console.log(classes)

  return (
    <div class="counter">
      <h4 style={{textAlign:"center"}}>How many guests will come with you?</h4>
      <div class="counter-align">
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
