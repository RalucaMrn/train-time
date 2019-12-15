import React from 'react';
import StarGray from './../assets/svg/star-gray.svg'
import StarGold from './../assets/svg/star-gold.svg'

export default class Star extends React.Component {
  render() {
    const state = this.props.state 
    let imageSource = StarGray

    if (state === "on") {
      imageSource = StarGold
    }

    return (
      <img src={imageSource} />
    );
  }
}
