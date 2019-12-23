import React from 'react';
import Icon from '@material-ui/core/Icon';
import plusButton from './../assets/png/plus-button.png'
import minusButton from './../assets/png/minus-button.png'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import { spacing } from '@material-ui/system';
import { makeStyles } from '@material-ui/core/styles';
import RemoveIcon from '@material-ui/icons/Remove';



export default class Counter extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement() {
    if (this.state.count === 0) {
      return 
    } 
    this.setState({
      count: this.state.count - 1
    });
  };
  


  render() {
    const useStyles = makeStyles(theme => ({
      margin: {
        margin: theme.spacing(1),
      },
      extendedIcon: {
        marginRight: theme.spacing(1),
      },
    }));

    return (
      

      <div>
        <h4>How many guests will come with you?</h4>
        <p>
          <Fab className='dec' onClick={(e) => this.decrement(e)} variant="outlined" aria-label="add">
            <RemoveIcon />
          </Fab>
          {this.state.count}
          <Fab className='inc' onClick={(e) => this.increment(e)} variant="outlined" aria-label="add">
            <AddIcon />
          </Fab>
        </p>
        
      </div>
    );
  }
};