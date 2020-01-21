import React from 'react';
import { render } from '@testing-library/react';
import foodImg from './../assets/png/food.png'
import drinksImg from './../assets/png/drinks.png'
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


export default function IncludedItems(props) {
  const listItems = props.items.map(item => {
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

    return <ListItem>
         <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText
          primary={item}
        />
      </ListItem >
    }
  );
  

  return <div>
    <h4 style={{ fontSize: "24px", color: "rgba(0, 0, 0, 0.87", paddingLeft: "22px"}}>Included</h4>
    <List style={{ fontSize: "16px", color: "rgba(0, 0, 0, 0.87", paddingLeft: "22px" }}>
      {listItems}
    </List>
    </div>
}

