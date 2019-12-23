import React from 'react'
import Star from './../components/star'

export default class Rating extends React.Component {
  createStars = (max, score) => {
    const stars = []
    for (var i = 0; i < max; i++) {
      const state = i < score ? "on" : "off"
      stars.push(<Star key={i} state={state} />)
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
