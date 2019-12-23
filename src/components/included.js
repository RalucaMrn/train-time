import React from 'react';
import { render } from '@testing-library/react';
import foodImg from './../assets/png/food.png'
import drinksImg from './../assets/png/drinks.png'
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


export default class IncludedItems extends React.Component {
  
  generate(items) {
    return items.map(item => {
      let icon = ''
      switch (item) {
        case 'food':
          icon = <img src={foodImg} />
          break;
        case 'drinks':
          icon = <img src={drinksImg} />
          break;
        case 'equipment':
          icon = <img src={drinksImg} />
          break;
        default:
          icon = <img src='' />
      }
      return < ListItem >
         <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText
          primary={item}
        />
      </ListItem >
    })
  }

  render() {
    const items = this.props.items;

    return <div>
      <h4>Included</h4>
          <List>
            {this.generate(items)}
          </List>
    </div>
  }
}


{/*  , */}