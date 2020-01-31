import React from 'react';
import reddit from './../assets/svg/reddit.svg'

export default class RedditButton extends React.Component {
  render(){
    const styles = {
      width: 42,
      height: 42,
      backgroundColor: '#FF4500',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      float: 'left',
      borderRadius: 5,
      marginRight: 12
      }

  return <div className='facebook' style={styles}>
      <img src={reddit} alt=""/>
    </div>
  }
}