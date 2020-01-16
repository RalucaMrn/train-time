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

  const useStyles = makeStyles(theme => ({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },

    margin: {
      margin: theme.spacing(1),
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },

    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <h4>How many guests will come with you?</h4>
      <span>
        <Fab className={classes.margin} className='dec' onClick={() => decrement()} variant="outlined" aria-label="add">
          <RemoveIcon />
        </Fab>
        {count}
        <Fab className='inc' onClick={() => increment()} variant="outlined" aria-label="add">
          <AddIcon />
        </Fab>
      </span>
      
    </div>
  );
};
