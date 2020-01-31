import React from 'react';
import facebook from './../assets/svg/facebook.svg'

export default class FacebookButton extends React.Component {
  render(){
    const styles = {
      width: 42,
      height: 42,
      backgroundColor: '#3B5998',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      marginRight: 12,
      float: 'left'
      }

  return <div className='facebook' style={styles}>
      <img src={facebook} alt=""/>
    </div>
  }
}