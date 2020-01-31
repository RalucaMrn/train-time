import React from 'react';
import twitter from './../assets/svg/twitter.svg'

export default class TwitterButton extends React.Component {
  render(){
    const styles = {
      width: 42,
      height: 42,
      backgroundColor: '#1AB2E8',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      float: 'left',
      borderRadius: 5,
      marginRight: 12
      }

  return <div className='facebook' style={styles}>
      <img src={twitter} alt=""/>
    </div>
  }
}