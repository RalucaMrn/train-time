import React from 'react'
import Star from './../components/star'

export default class Rating extends React.Component {
  createStars = (max, score) => {
    const stars = []
    for (var i = 0; i < max; i++) {
      const state = i < score ? "on" : "off"
      stars.push(<Star state={state} />)
    } 
    return stars
  }

  render() {
    const score = this.props.score
    const max = this.props.max

    return (
      <div>
        {this.createStars(max, score)}
      </div>
    );
  }
}


    // <Rating rating="{review.rating}" max="5"/>
    // Rating face
    // - vede cate sunt maxim (5)
    // - le randeaza pe rand
    // - cand le randeaza le seteaza si starea (on/off)
    // array.forEach((element, key) => {
    //   const starState = key <= rating ? 1 : 0
    //     < RatingStar state ="{starState}" />
    // });