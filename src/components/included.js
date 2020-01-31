import React from 'react';
import foodImg from './../assets/png/food.png'
import drinksImg from './../assets/png/drinks.png'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


export default function IncludedItems(props) {
  const listItems = props.items.map(item => {
    let icon = ''
    switch (item) {
      case 'food':
        icon = <img src={foodImg} alt=""/>
        break;
      case 'drinks':
        icon = <img src={drinksImg} alt=""/>
        break;
      case 'equipment':
        icon = <img src={drinksImg} alt=""/>
        break;
      default:
        icon = <img src='' alt=""/>
    }

    return <ListItem key={item}>
         <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText
          primary={item}
        />
      </ListItem >
    }
  );
  

  return <div className="included-list">
    <h4>Included</h4>
    <List>
      {listItems}
    </List>
    </div>
}

